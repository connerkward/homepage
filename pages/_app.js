import '../styles/global.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from "next/head";

// Placed on every single page
// This default export is required in a new `pages/_app.js` file.
export default function MyApp(props) {
    const Component = props.Component
    return (
    <html lang="en-US">
        <Head>
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>"/>
            
            <title>Conner Ward</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta charset="UTF-8"/>
            <meta name="description" content="Developer. Loves Python, CAD, Embedded C, JS, Docker, Logic Gates."/>
            <meta name="author" content="Conner Ward" />
            {/* facebook meta tags */}
            <meta property="og:title" content="Conner Ward" />
            <meta property="og:image" content="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/socialmedia/apple/155/test-tube_1f9ea.png"/>
            <meta property="og:description" content="UX Design, Web Dev, Embedded Software."/>
        </Head>
        <Nav props={{ props: { active: props.pageProps.active}}}></Nav>
        <Component {...props} />
        <Footer></Footer>
    </html>
    )
}