import Link from 'next/link'
import TagTagWithCount from './TagWithCount'
import * as lib from "../lib/processing"


// needs to be fed tags from page props
const TagFeed = (props) => {
    const tagsFormatted =  Object.keys(props.props.tags).map((tag) => {
        return { tagtext: lib.humanTag(tag), tagslug: tag, tagcount: props.props.tags[tag] }
        }
    ).sort((a, b) => { return b.tagcount - a.tagcount}).slice(0,7)
    props = {tags: tagsFormatted}
    return (
        <div className="tagfeed">
            <div className="midboldtitle" id="popular-tags"><a href="/blog/tags">Popular Tags</a></div>
            <ol className="posttags">
                {props.tags.map((tag) => { return <TagTagWithCount props={tag}/> })}
            </ol>
        </div>
    )
}



export default TagFeed