// this should redirect client a url (/pdf) which caddy will redirect to another docker container 
var Portfolio = (props) => {
    return (
        <div className="main">
            <Link as={`/portfolio/pdf`} href={`/portfolio/pdf`}>PDF</Link>
        </div>
    );
    
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "portfolio" } }
}

export default Portfolio