import Headline from "../components/Headline"
import Link from "next/link"
import Head from "next/head";

var About = (props) => {
    return (
        <div className="main">
            <Head><title>Conner Ward - About</title></Head>
            <Headline props={{ title: "About.", subtitle: "The Deets. 🧑🏻‍💻" }}></Headline>
            <p>Lorem everything you wanted to know, and everything you didn't.
            </p>
        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return {props: {active:"about"}}
}

export default About