import PostPreview from "./PostPreview"
import Link from "next/link"

var MoreStories = (props) => {
    props = props.props
    return (
        <div className="morestories">
            <div className="midboldtitle" id="more-stories"><Link href="/blog/feed/1">More Stories</Link></div>
            <ul className="morestoriescontainer">
                <li>
                    <PostPreview className="postpreview" props={props.posts.post2}></PostPreview>
                </li>
                <li>
                    <PostPreview className="postpreview" props={props.posts.post3}></PostPreview>
                </li>
            </ul>
        </div>
    )
}

export default MoreStories