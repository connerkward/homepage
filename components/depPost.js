import Headline from "./Headline"
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

export default function Post(props) {
    // Render data from `getStaticProps`
    return (
        <article>
            <h1>{props.frontmatter.title}</h1>
            <ReactMarkdown source={props.markdownBody}/>
        </article>
    )
}

// What is ctx?
// When navigating to a route /julius, the params object
// { slug: 'julius' } is passed in, the md file is found,
// and parsed. returned as props. 
export async function getStaticProps({ ...ctx }) {
    const { slug } = ctx.params
    const content = await import(`../content/${slug}.md`)
    // const config = await import(`../../data/config.json`)
    const data = matter(content.default)

    return {
        props: {
            // siteTitle: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    }
}

