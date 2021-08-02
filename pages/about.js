import Headline from "../components/Headline"
import Link from "next/link"

var About = (props) => {
    return (
        <div className="main">
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