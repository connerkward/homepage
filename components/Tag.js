import Link from 'next/link'

const Tag = (props) => {
    return (
        <li className="posttag" key={props.props.tagslug}>
            {/* <Link as={`/blog/tags/${props.props.tagslug}`} href={`/blog/tags/${props.props.tagslug}`}>{props.tagtext}</Link> */}
            <Link className="a" href={`/blog/tags/${props.props.tagslug}`}>{props.props.tagslug}</Link>
        </li>
    )
}

export default Tag