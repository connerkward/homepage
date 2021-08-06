import { join } from 'path'
// import fs from 'fs'
import PostPreview from '../../components/PostPreview'
import * as lib from "../../lib/processing"
import PaginationNav from '../../components/PaginationNav'
import TagFeed  from "../../components/TagFeed"
const TAGSPERPAGE = 4

var TagIndex = (props) => {
    return (
        <div className="main">
            <div className="midboldtitle">{"Tags"}</div>
            <p>In here, use TagFeed component after global props are set up.</p>
        </div>
    )
}

// This also gets called at build time
export async function getStaticProps() {
    // params : {pages:[{posts:[post,], pindex:}]}
    // get posts from 
    // params.active = "blog"
    return {props:{}}
}
export default TagIndex