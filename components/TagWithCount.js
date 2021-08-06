import Link from 'next/link'

const TagWithCount = (props) => {
    props = props.props
    // console.log("TAG WITH COUNT PROPS")
    // console.log(props)
    return (
        <li className="posttagcount" key={props.tagslug}>
            <Link href={`/blog/tags/${props.tagslug}`}>
                <div>
                    <div className="counttagtext">{props.tagtext}</div>
                    <div className="counttagcount">{props.tagcount}</div>
                </div>
            </Link>
            
        </li>
    )
}

export default TagWithCount