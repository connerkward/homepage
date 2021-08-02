import * as lib from "../lib/processing"
import Link from "next/link"

var Nav = (props) => {
    const activepage = props.props.props.active
    const navitem = (page, activePage) => {
        const capPage = lib.firstLetterToUpper(page)
        if (activePage == page){
            return (<li>
                <Link href={`/${page}`} id={page}><strong>{capPage}</strong></Link>
            </li>)
        } else {
            return (<li>
                <Link href={`/${page}`} id={`${page}`}>{capPage}</Link>
            </li>)
        }
        
    }
    
    return (
        <nav>
            <ol>
                <li id="logo">
                    <Link href="/">
                        {/* <img src="public/images/logo.png" alt="yellow stargods dot net logo" className="logoresponsive"></img> */}
                        <a href="/">
                            <strong>ConWard_</strong>
                        </a>
                    </Link>
                </li>
                {/* <li>
                    <a href="/" id="home">Home</a>
                </li> */}
                {/* <li>
                    <a href="/portfolio" id="portfolio">Portfolio</a>
                </li> */}
                {navitem("portfolio", activepage)}
                {/* <li>
                    <a href="/blog" id="blog"><strong>Blog</strong></a>
                </li> */}
                {navitem("blog", activepage)}
                {/* <li>
                    <a href="/about" id="about">About</a>
                </li> */}
                {navitem("about", activepage)}
                {/* <li>
                    <a href="/contact" id="contact">Contact</a>
                </li> */}
                {navitem("contact", activepage)}
                <li id="nav-right">
                    <a href="search" id="nav-right-link">᳇</a>
                </li>
            </ol>
        </nav>
    )}
// ֍ ߷ ☞ ⟁ 𐂖
// ᳇ ᮚ ᮘ ᮑ ᜦ ᙎ ພ ผ พ
// ♜
export default Nav