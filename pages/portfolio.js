var Portfolio = (props) => {
    return (
        <div className="main">
            Dingo
        </div>
    );
    
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "portfolio" } }
}

export default Portfolio