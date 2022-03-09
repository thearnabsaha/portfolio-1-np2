import Image from 'next/image';
import award from '../public/img/award.png'
const About = () => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="left">
                            <div className="bg"></div>
                            <Image src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" height="600" width="400" className='aboutImg' alt='arnabs image'/>
                        </div>
                        <div className="right">
                            <h1>About me</h1>
                            <h3>It is a long established fact that a reader will be distracted by the readable content.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehende.</p>
                            <div className="award">
                                    <Image src={award} width={`150`} height={`150`} className='awardImg'  alt='arnabs image'/>
                                <div className="awardDetails">
                                    <h2>International Design Awards 2021</h2>
                                    <h3>Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit and fugit.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;