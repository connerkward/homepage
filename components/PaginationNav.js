import Link from "next/link"
import Image from "next/image"

var PaginationNav = (props) => {
    props = props.props
    // props == {pindex: , validpages:[,]}
    return (
        <ol className="pagingationnav">
            {adjPageLinks(props)}
        </ol>
    )
}

const adjPageLinks = (props) =>{
    // props == {pindex: , validpages:[,]}
    // Generate valid page indexes around pindex, with max total...
    const TOTALVISINDEXES = 5 // always an odd number (... 5 6 7 ...)
    var validpagesset = new Set(props.validpages)
    var upindexes = []
    var downindexes = [] // will store final arr
    var i = 1;
    const pindex = parseInt(props.pindex)
    var visited = 0
    while (visited < TOTALVISINDEXES - 1 && i < TOTALVISINDEXES - 1){
        if (validpagesset.has(pindex - i)) {
            downindexes.push(pindex - i)
            visited++
        }
        if (validpagesset.has(pindex + i)) {
            upindexes.push(pindex + i)
            visited++
        }
        i++
    }
    // merge
    downindexes.push(pindex)
    upindexes.map((i) => { downindexes.push(i)})
    downindexes = downindexes.sort((a,b) => {return a-b})
    
    // Ellipses
    // if (downindexes[0] != 1){
    //     downindexes.unshift("<...")
    // }
    // if (downindexes[downindexes.length - 1] != props.validpages[props.validpages.length-1]) {
    //     downindexes.push("...>")
    // }
    
    return (
        downindexes.map((index) => {
            if (index == "<...") {
                return (<li key={index}><a className="paginationnavitem" href={`/blog/feed/1`}>{"..."}</a></li>)
            } else if (index == "...>") {
                return (<li key={index}><a className="paginationnavitem" href={`/blog/feed/${props.validpages[props.validpages.length - 1]}`}>{"..."}</a></li>)
            } else if (index == pindex) {
                return (<li key={index}><a className="paginationnavitem" href={`/blog/feed/${index}`}><strong id="activepagindex">{index}</strong></a></li>)
            } else {
                return (
                    <li key={index}><a className="paginationnavitem" href={`/blog/feed/${index}`}>{index}</a></li>)
            }
        })
        
    )
}

export default PaginationNav