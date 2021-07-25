import Link from "next/link"
import Image from "next/image"

var Headline = (props) => {
    props = props.props
    return (
    <div className="headline">
            <div className="bigboldtitle">{props.title}</div>
            {/* <div className="midboldtitle">Conner.</div> */}
            <div className="smallboldtitle">{props.subtitle}</div>
            {/* <p>Incididunt amet aliqua exercitation commodo nulla id labore.</p> */}            
    </div>
    )
}

export default Headline