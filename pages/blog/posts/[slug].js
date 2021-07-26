import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import { join } from 'path'
import Headline from "../../../components/Headline"

var PostTemplate = (props) => {
  // This holds the data between `---` from the .md file
  // const frontmatter = data
  props = props.pageProps
  return (
    <div className="main">
      <div className="midboldtitle">{props.title}</div>
      <ReactMarkdown>{props.body}</ReactMarkdown>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const postsDirectory = join(process.cwd(), '/content')
  const postFilenames = fs.readdirSync(postsDirectory)
  const slugs = postFilenames.map((filename) => { return filename.replace(/\.md$/, '') })
  const paths = slugs.map((slug) => {
    return { params: { slug: slug } }
  })
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // get from filesystem
  const fileContents = fs.readFileSync(join(process.cwd(), `/content/${params.slug}.md`), 'utf8')
  // extract frontmatter from markdown file
  const { data, content } = matter(fileContents)
  // convert markdown to html (done in React component ^)
  return { props: { title: data.title, body: content } }
}

export default PostTemplate