import { join } from 'path'
import fs from 'fs'
import PostPreview from '../../../components/PostPreview'
import matter from "gray-matter"
import * as lib from "../../../lib/processing"
import PaginationNav from '../../../components/PaginationNav'

const POSTSPERPAGE = 5

var PaginationIndex = (props) => {
    props = props.pageProps
    // console.log(props)
    // console.log("PAGINDEX")
    // console.log(props.posts)
    // props = {pindex:(current index), validpages: [], posts:{}}
    return (
        <div className="main">
            <div className="pindextitlecontainer">
                <div className="midboldtitle">Page {props.pindex}</div>
                <PaginationNav props={props} />
            </div>
            <ol className="pindexstories">
                {props.posts.map((post) => {
                    return <li className="morestoriescontainer" key={post.postSlug}>
                        <PostPreview className="postpreview" props={post}></PostPreview>
                    </li>
                })}
            </ol>
            <PaginationNav props={props}/>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    //Get the paths we want to pre-render based on posts
    const postFilenames = fs.readdirSync(join(process.cwd(), '/content'))
    // number of pages (based on 10 per page)
    const pageCount = Math.ceil(postFilenames.length / POSTSPERPAGE)
    let paths = [];
    for (let currpage = 1; currpage < pageCount + 1; currpage++) {
        // index of page (1->pageCount)
        paths.push({ params: { pindex: currpage.toString() } })
    }
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    //Get the paths we want to pre-render based on posts
    const postFilenames = fs.readdirSync(join(process.cwd(), '/content'))
    // get all posts data, sort by date
    const postData = postFilenames.map((filename) => {
        const fileContents = fs.readFileSync(join(process.cwd(), `/content/${filename}`), 'utf8')
        var matteredcontents = matter(fileContents)
        // remove .md and use filename as slug
        matteredcontents.data.slug = filename.replace(/\.[^/.]+$/, "")
        return matteredcontents
    }).sort(function (a, b) { return b.data.date - a.data.date });
    
    // number of pages (based on 10 per page)
    const pageCount = Math.ceil(postData.length / POSTSPERPAGE)
    var pagination = []
    var postsAppended = 0;
    for (let currpage = 1; currpage < pageCount + 1; currpage++) {
        // index of page (1->pageCount)
        var page = {pindex: currpage.toString(), posts:[]}
        // 5 per page 
        for (var i of lib.range(0, POSTSPERPAGE-1)) {
            if (postsAppended != postData.length) {
                page.posts.push(postData[postsAppended])
                postsAppended++;
            }
        }
        pagination.push(page)
    }

    // GET ALL TAGS(with count)
    var tagCounts = {}
    postData.forEach(post => {
        post.data.tags.forEach(tag => {
            if (tag in tagCounts) {
                tagCounts[`${tag}`] += 1
            } else {
                tagCounts[`${tag}`] = 1
            }
        })
    });

    function templatePost(data) {
        return {
            imgSrc: `/img/${data.data.imgfilename}`,
            postSlug: data.data.slug,
            postTitle: data.data.title,
            postDate: lib.humanDate(data.data.date),
            postPreviewText: `${lib.formatPreviewMD(data.content)} [[...]](/blog/posts/${data.data.slug})`,
            tags: data.data.tags.map((tag) => {
                return { tagtext: lib.humanTag(tag), tagslug: tag, tagcount: tagCounts[tag] }
            }),
            colorRotation: lib.randomChoice(lib.COLORSCHEMES),
            width: 10,
            height: 5,
            // prefColor: COLORSCHEMESMAP[postData.prefcolor],
            // invert: false,
            // grayscale: false,
        }
    }
    params.posts = []
    pagination[params.pindex-1].posts.map((post) => { 
        params.posts.push(templatePost(post));
    })
     
    params.validpages = [...lib.range(1, pagination.length)]
    // params : {pages:[{posts:[post,], pindex:}]}
    // get posts from 
    params.active = "blog"
    return {props: params}
}
export default PaginationIndex