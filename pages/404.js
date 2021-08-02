import ErrorPage from 'next/error'
import Image from 'next/image'

var Error404 = (props) => {
    props = props.pageProps
    return (
        <div className="main">
            <div className="outer">
                <div className="errorpagecontainer">
                    <div className="img">
                        <Image
                            src={props.imageSrc}
                            alt={`austin powers says, Yea Baby!`}
                            width={150}
                            height={200}
                            layout="fixed"
                            objectFit='stretch'
                            priority={true}
                        />
                    </div>
                    <style jsx>
                        {`
                    .img {
                        // full color
                        filter: contrast(.137) sepia(37.5%) contrast(2.8)  brightness(0.9) contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(0.3) invert(1);


                        // grayscale and inverted
                        // filter: invert(1)  contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5);
                        // just grayscale
                        // filter: contrast(.17) sepia(39%) contrast(2.8)  brightness(0.9)  contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(1) brightness(0.67) contrast(5) ;
                    }
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
    var colorRotation = 360-190;
    return { props: { 
        imageSrc: imageSrc,
        colorRotation: colorRotation,
    }}
}

export default Error404