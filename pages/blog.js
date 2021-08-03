import Link from 'next/link'
import PostPreview from '../components/PostPreview'
import MoreStories from '../components/MoreStories';
import Headline from '../components/Headline'
import path from 'path'
import { promises as fs } from 'fs'
import TagFeed from "../components/TagFeed"
import matter from 'gray-matter'
import * as lib from "../lib/processing"
import Head from "next/head";

var Blog = (props) => {
  props = props.pageProps
  return (
    <div className="main">
      <Head><title>Conner Ward - Blog</title></Head>
      <Headline props={{title:"Blog.", subtitle:"What's not UX?"}}></Headline>             
      <PostPreview props={props.posts.post1}></PostPreview>
      <MoreStories props={props}></MoreStories>
      <TagFeed props={props}></TagFeed>
    </div>
  );
}

export async function getStaticProps(context) {
  // GET POSTS FILENAMES
  const postsDirectory = path.join(process.cwd(), '/content')
  const postsFilenames = await fs.readdir(postsDirectory)
  // Get data from .md frontmatter posts
  // generate and inject post slug from filename
  // generate and inject preview text, with link over "..."
  // preview text also removed line breaks /n
  // header rendered small in <ReactMarkdown> tag
  // inject route
  // limit to first 2-3 most common tags
  const postsData = await Promise.all(postsFilenames.map(async (filename) => {
    const fileData= await fs.readFile(path.join(process.cwd(), `/content/${filename}`), 'utf8').then((fileData) => {
      const { data, content } = matter(fileData)
      // inject slug
      data.slug = filename.replace(/\.[^/.]+$/, "")
      // inject route
      data.route = `/blog/posts/${data.slug}`
      // inject modified preview text, end ... link
      data.postpreviewtext = `${lib.formatPreviewMD(content)} [[...]](${data.route})`
      return data
    })
    return fileData
  }));
  
  // GET ALL TAGS(with count)
  var tagCounts = {}
  postsData.forEach(post => {
    post.tags.forEach(tag => {
      if (tag in tagCounts){
        tagCounts[`${tag}`] += 1
      } else {
        tagCounts[`${tag}`] = 1
      }
    })
  });

  // sort by date, filter by "hero"
  const dateSortedPostsData = postsData.sort((a, b) => a - b)
  const dateHeroPosts = dateSortedPostsData.filter((data) => data.hero && !data.herobig)
  const dateHeroBigPosts = dateSortedPostsData.filter((data) => data.hero && data.herobig)

  // CONVERT TO HUMAN READABLE =============
  // all raw data before this point
  // date
  // unslug tags (remove -, capitalize first letters) 
  // add these functions to a /lib folder, along with random
  function templatePost(postData){
    return {
      imgSrc: `/img/${postData.imgfilename}`,
      postSlug: postData.slug,
      postTitle: postData.title,
      postDate: lib.humanDate(postData.date),
      postPreviewText: postData.postpreviewtext,
      tags: postData.tags.map((tag) => { 
        return { tagtext: lib.humanTag(tag), tagslug: tag, tagcount: tagCounts[tag]}
      }),
      colorRotation: lib.randomChoice(lib.COLORSCHEMES),
      width: 10,
      height: 5,
      // prefColor: COLORSCHEMESMAP[postData.prefcolor],
      // invert: false,
      // grayscale: false,
    }
  }

  
  const posts = { post1: templatePost(dateHeroBigPosts[0]), post2: templatePost(dateHeroPosts[0]), post3: templatePost(dateHeroPosts[1])}
  return {
    props: {
      posts: posts,
      active: "blog",
      tags: tagCounts,
    },
  }
}

export default Blog;