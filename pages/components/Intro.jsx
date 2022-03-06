import me from '../../public/img/mee.png'
import Image from 'next/image';
const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="container">
                    <div className="box">
                        <div className="left">
                            <h3>Hello, My name is</h3>
                            <h1>Arnab Saha</h1>
                            <div className="title">
                                <div className="titleItems">
                                    <div className="titleItem">Web Developer</div>
                                    <div className="titleItem">Blockchain Developer</div>
                                    <div className="titleItem">Forntend Developer</div>
                                    <div className="titleItem">Backend Developer</div>
                                    <div className="titleItem">UI/UX Designer</div>
                                </div>
                            </div>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                        </div>
                        <div className="right">
                            <div className="introImg">
                                <Image src={me} width="800" height="800" objectFit='cover' alt='arnabs image'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;