import '../styles/global.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from "next/head";

// Placed on every single page
// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props) {
    const Component = props.Component
    return (
    <div>
        <Nav props={{ props: { active: props.pageProps.active}}}></Nav>
        <Component {...props} />
        <Footer></Footer>
    </div>
    )
}