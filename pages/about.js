import Headline from "../components/Headline"
import Link from "next/link"
import Head from "next/head";
import Footer from "../components/Footer";

var About = (props) => {
    return (
        <div className="main">
            <Head><title>Conner Ward - About</title></Head>
            <Headline props={{ title: "About", subtitle: "The Deets. 🧑🏻‍💻" }}></Headline>
            <p className="innerbody">
            Lorem everything you wanted to know, and everything you didn't.
            </p>
            <Footer></Footer>
        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return {props: {active:"about"}}
}

export default About