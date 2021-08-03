import Headline from "../components/Headline"
import Link from "next/link"

var Contact = () => {
    return (
        <div className="main">
            <Headline props={{ title: "Contact", subtitle: "Say hi! 👋" }}></Headline>
            <p>Must. Hide. Info. From. BOTS. Contact form perhaps?
            </p>
        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "contact" } }
}

export default Contact