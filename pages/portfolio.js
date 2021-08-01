// this should redirect client a url (/pdf) which caddy will redirect to another docker container 
var Portfolio = (props) => {
    return (
        <div className="main">
            <a href={`/portfolio/pdf`}>PDF</a>
        </div>
    );
    
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "portfolio" } }
}

export default Portfolio