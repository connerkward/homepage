var Contact = () => {
    return (
        <div className="main">
            <div className="smallboldtitle">Contact</div>
            <p>Occaecat consectetur labore et do minim amet excepteur exercitation. Velit occaecat exercitation consequat commodo quis mollit magna consectetur ea Lorem est ex voluptate ullamco. Fugiat enim eiusmod ad incididunt id. Labore duis ad enim proident excepteur sint dolor irure amet aute ex. Labore magna deserunt dolor esse enim irure quis nostrud aute duis dolor tempor. 
            </p>
        </div>
    )
}

// static props to update nav 
export async function getStaticProps(context) {
    return { props: { active: "contact" } }
}

export default Contact