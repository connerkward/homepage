import Link from "next/link"
import Headline from "../components/Headline"
// this should redirect client a url (/pdf) which caddy will redirect to another docker container 
var Portfolio = (props) => {
    return (
        <div className="main">
            <Headline props={{ title: "Projects", subtitle: "Exciting!" }}></Headline>
            <br></br>
            <p>Under Construction. Imagine vast React components. And LOTS of props.</p>
            <p>Heres a link to the pdf version :: <Link as={`/portfolio/pdf`} href={`/portfolio/pdf`}><a aria-label="pdf">PDF.</a></Link>
            </p>
        </div>
    );
    
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "portfolio" } }
}

export default Portfolio