import Link from 'next/link'

const Tag = (props) => {
    const newtagslug = `/tags/${props.props.tagslug}`
    return (
        <li className="posttag" key={props.props.tagslug}>
            <div>{props.props.tagtext}</div>
            {/* <Link href={`/${newtagslug}`}>{props.tagtext}</Link> */}
        </li>
    )
}

export default Tag