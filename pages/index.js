import Headline from "../components/Headline"
import Link from "next/link"
import Head from "next/head";

var Homepage = (props) => {
    return (
        <div className="main">
            <Headline props={{ title: "Welcome", subtitle: "Hi... you!" }}></Headline>
            <p> Ex labore enim exercitation non id fugiat mollit mollit sunt aliqua. Minim duis sint ex cillum consequat reprehenderit reprehenderit. Cupidatat duis ad pariatur eu enim officia commodo exercitation irure aliqua. Sit est consequat commodo culpa anim magna mollit culpa occaecat duis et.
            </p>
        </div>
    );

}

export default Homepage