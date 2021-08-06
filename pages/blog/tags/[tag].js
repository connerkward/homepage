import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import { join } from 'path'
import Headline from "../../../components/Headline"
import * as lib from "../../../lib/processing"

var TagPage = (props) => {
  // This holds the data between `---` from the .md file
  // const frontmatter = data
  props = props.pageProps
  return (
    <div className="main">
      <div className="midboldtitle">{lib.firstLetterToUpper(props.tag)}</div>
      <p>Some text describing the tag.</p>
    </div>
  )
}

// This function gets called at build time
// For every post, get tags, generate paths based on tags
export async function getStaticPaths() {
  const postFilenames = fs.readdirSync(join(process.cwd(), '/content'))
  // get all posts data
  const postData = postFilenames.map((filename) => {
    const fileContents = fs.readFileSync(join(process.cwd(), `/content/${filename}`), 'utf8')
    var matteredcontents = matter(fileContents)
    // remove .md and use filename as slug
    matteredcontents.data.slug = filename.replace(/\.[^/.]+$/, "")
    return matteredcontents
  });

  // GET ALL TAGS(with count)
  var tagCounts = lib.tagCountsContent(postData)


  // Now that we have the tags, generate pathnames
  const paths = Object.keys(tagCounts).map((tag) => {
    return { params: { tag: tag } }
  })
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // TODO: list of all similar tags, posts with this tag
  return { props: {tag : params.tag} }
}

export default TagPage