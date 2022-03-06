import Link from 'next/link';
import Image from 'next/image';
const Project = ({img,link}) => {
    return (
        <>
            <div className="p">
                <div className="pBrowser">
                    <div className="pCircle c1"></div>
                    <div className="pCircle c2"></div>
                    <div className="pCircle c3"></div>
                </div>
                {/* <Link href={link} target="_blank" passHref>
                    <Image src={img} alt="" className='pImg' width="400" height="400" objectFit='cover' objectPosition="center"/>
                </Link> */}
            </div>
        </>
    );
}
export default Project;