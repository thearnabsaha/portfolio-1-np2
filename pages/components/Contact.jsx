import Image from 'next/image';
import phone from '../../public/img/phone.png';
import email from '../../public/img/email.png';
import address from '../../public/img/address.png';
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="green"></div>
                <div className="left">
                    <h1>Let's discuss your project</h1>
                    <div className="address">
                        <Image src={phone} height={`30`} width={`30`} objectFit='cover'/>
                        <p>91-6296818891</p>
                    </div>
                    <div className="address">
                        <Image src={email} height={`30`} width={`30`} objectFit='cover'/>
                        <p>thearnabsaha201@gamil.com</p>
                    </div>
                    <div className="address">
                        <Image src={address} height={`30`} width={`30`} objectFit='cover'/>
                        <p>245 King Street, Touterie Victoria 8520 Australia</p>
                    </div>
                </div>
                <div className="right">
                    <p><span>What’s your story?</span> Get in touch. Always available for freelancing if the right project comes along. me.</p>
                    <form action="">
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Subject'/>
                        <input type="email" placeholder='Email'/>
                        <textarea placeholder='message'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;