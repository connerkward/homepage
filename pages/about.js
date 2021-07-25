var About = (props) => {
    return (
        <div className="main">
            <div className="smallboldtitle">About</div>
            <p>Proident anim cupidatat veniam enim deserunt labore magna enim fugiat tempor sint. Occaecat eu excepteur consequat dolore esse laboris voluptate deserunt aute reprehenderit ex ea id consequat. Est veniam aliquip laboris elit et pariatur proident nulla commodo. Voluptate dolor adipisicing dolore duis fugiat aute officia nostrud est anim laboris nisi nostrud. Ea aliqua et laboris et consectetur adipisicing laborum do aute sit excepteur incididunt et ut. Anim occaecat Lorem fugiat sit nulla elit mollit. Consectetur minim sit dolor veniam.
            </p>
        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return {props: {active:"about"}}
}

export default About