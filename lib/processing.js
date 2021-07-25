const POSTPREVIEWTEXTSIZE = 225
// const COLORSCHEMES = [325, 175, 200, 250,325, 300]
// yellow, pink, blue
export const COLORSCHEMES = [175, 250, 325]
export const COLORSCHEMESMAP = { "yellow": 325, "blue": 175, "pink": 250 }

export function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const humanTag = (tag) => {
    // capitalize each letter, remove any dashes
    return tag.split("-").map((subtag) => { return `${subtag.charAt(0).toUpperCase() + subtag.slice(1)}` }).join(" ")
}

export const firstLetterToUpper = (str) => {
    if (str == undefined) {
        return ""
    } else {
        return `${str.charAt(0).toUpperCase() + str.slice(1)}`
    }
}

export const humanDate = (rawDate) => {
    return `${rawDate.toDateString()}`.toLowerCase()
}

export function formatPreviewMD(text) {
    // converts markdown headers into preview text. ->
    // shortens text
    // Converts headers into normal text, 
    // Removes photo embedds. 
    // removes \n
    return text.split('\n').map((line) => {
        if (line[0] == "#") { // convert header to normal text
            return `${line.replace(/#/g, '')}.`
        } else if (line.includes("![")) { // delete photo link
            return `${line.replace(/(!)(\[.*\]\(.*\))/g, "")}`
        } else {
            return line
        }
    }).join('\n').replace(/(\r\n|\n|\r)/gm, " ").slice(0, POSTPREVIEWTEXTSIZE)
}

export function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}