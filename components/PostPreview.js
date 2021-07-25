import Link from "next/link"
import Image from "next/image"
import Tag from './Tag'
import path from 'path'
import ReactMarkdown from "react-markdown"

// WHAT TO FEED POSTPREVIEW 
// props.props
// {
//     imgSrc: '/img/1.jpeg',
//     postSlug: 'second-post',
//     postTitle: 'Silent Guns',
//     postDate: 'mon aug 31 2020',
//     postPreviewText: '',
//     tags: [
//           { tagtext: 'Ww2', tagslug: 'ww2', tagcount: 1 },
//           { tagtext: 'Veterans', tagslug: 'veterans', tagcount: 1 },
//           { tagtext: 'Automation', tagslug: 'automation', tagcount: 4 }
//           ],
//      colorRotation: 175,
//      width: 10,
//      height: 5
// }

var PostPreview = (props) => {
    props = props.props
    // console.log("POST PREVIEW")
    // console.log(props)
    const image = (
        <div>
            <div className="outer" >
                <div className="img">
                    <Image
                        src={props.imgSrc}
                        alt={`Cover Image for ${props.postTitle}`}
                        width={100}
                        height={50}
                        layout="responsive"
                        objectFit='stretch'
                        priority={true}
                        className="coverimage"
                    // placeholder={`blur`}
                    // object-fit={"cover"}
                    />
                </div>
            </div>
            <style jsx>
                {`
                .outer{
                    background-color: black;
                }
                .outer .img {
                    // full color
                    filter: contrast(.137) sepia(37.5%) contrast(2.8)  brightness(0.9) contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(0.3);


                    // grayscale and inverted
                    // filter: invert(1)  contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5);
                    // just grayscale
                    // filter: contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5) ;
                }
                `}
            </style>
        </div>
    )

    return (
        <div className="postpreview">
            <div className="coverimage">
                {props.postSlug ? (
                    <Link as={`/blog/posts/${props.postSlug}`} href="/blog/posts/[slug]">
                        <a aria-label={props.postTitle}>{image}</a>
                    </Link>
                ) : (
                    image
                )}
            </div>
            <div className="postpreviewdata">
                <div className="postpreviewtitle">
                    <Link as={`/blog/posts/${props.postSlug}`} href="/blog/posts/[slug]">
                        <a aria-label={props.postTitle}>{props.postTitle}</a>
                    </Link>
                </div>
                <div className="postpreviewdate">{props.postDate}</div>
                <ReactMarkdown className="postpreviewtext">{props.postPreviewText}</ReactMarkdown>
                <ul className="posttags">
                    {props.tags.map((tag) => (
                        <Tag props={{ tagslug: tag.tagslug, tagtext: tag.tagtext }} key={tag.tagslug}></Tag>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostPreview