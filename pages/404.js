import ErrorPage from 'next/error'
import Image from 'next/image'

var Error404 = (props) => {
    props = props.pageProps
    return (
        <div className="main">
            <div className="outer">
                <div className="errorpagecontainer">
                    {/* <div className="img">
                        <Image
                            src={props.imageSrc}
                            alt={`austin powers says, Yea Baby!`}
                            width={150}
                            height={200}
                            layout="fixed"
                            objectFit='stretch'
                            priority={true}
                        />
                    </div> */}
                    <style jsx>
                        {`
                        @media screen and (prefers-color-scheme: dark) {
                    .img {
                        // grayscale and inverted
                        filter: invert(1)  contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5) sepia(100%) brightness(0.95);
                    }}
                    @media screen and (prefers-color-scheme: light) {
                    .img {
                        filter: contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5) sepia(100%) brightness(1) invert(1);
                        background-blend-mode: color;
                    }}
                    `}
                    </style>
                    <p className='midboldtitle'>404</p>
                    <p className='smallboldtitle'>|</p>
                    <p>You've been 404'ed, baby.</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    var imageSrc = "/img/austin.jpg"
    var colorRotation = 190;
    return { props: { 
        imageSrc: imageSrc,
        colorRotation: colorRotation,
    }}
}

export default Error404