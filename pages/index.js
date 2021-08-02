import Headline from "../components/Headline"
import Link from "next/link"

var Homepage = (props) => {
    return (
        <div className="main">
            <Headline props={{ title: "Welcome", subtitle: "Hi... you!" }}></Headline>
        </div>
    );
    
}

export default Homepage