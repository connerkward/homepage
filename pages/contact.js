import Headline from "../components/Headline"
import Link from "next/link"
import Head from "next/head";
import Footer from "../components/Footer";
 
var Contact = () => {
    return (
        <div className="main">
            <Head><title>Conner Ward - Contact</title></Head>
            <Headline props={{ title: "Contact", subtitle: "Say hi! 👋" }}></Headline>
            <div className="innerbody">Bots</div>
            <Footer></Footer>

        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "contact" } }
}

export default Contact