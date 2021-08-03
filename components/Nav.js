import * as lib from "../lib/processing"
import Link from "next/link"

var Nav = (props) => {
    const activepage = props.props.props.active
    const navitem = (page, activePage) => {
        const capPage = lib.firstLetterToUpper(page)
        if (activePage == page) {
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
                            <strong>Conner Ward</strong>
                            {/* <img className="logoimg" src="/img/1.jpeg" width="25" height="25" /> */}
                            {/* <p className="n">Dev</p> */}
                        </a>
                    </Link>
                </li>
                {navitem("portfolio", activepage)}
                {navitem("blog", activepage)}
                {navitem("about", activepage)}
                {navitem("contact", activepage)}
                <li id="nav-right">
                    <a href="search" id="nav-right-link">᳇</a>
                </li>
            </ol>
            {/* For styling logo image */}
            <style jsx>
                {`
                .logoimg {
                    filter: invert(1) sepia(37.5%);
                }
                `}
            </style>
        </nav>
    )
}
// ֍ ߷ ☞ ⟁ 𐂖
// ᳇ ᮚ ᮘ ᮑ ᜦ ᙎ ພ ผ พ
// ♜
export default Nav