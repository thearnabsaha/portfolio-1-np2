import Image from 'next/image';
import phone from '../../public/img/phone.png';
import email from '../../public/img/email.png';
import address from '../../public/img/address.png';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const handleSubmit =(e) => {
        e.preventDefault();
        emailjs.sendForm('service_qrac7ua', 'template_r6sex1o', form.current, 'user_SvxI195VxTx62CejHs17q')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <div className="contact">
                <div className="green"></div>
                <div className="left">
                    <h1>Lets discuss your project</h1>
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
                    <form ref={form} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name"/>
                        <input type="text" placeholder='Subject' name="user_subject"/>
                        <input type="email" placeholder='Email' name="user_email"/>
                        <textarea placeholder='message' name="message"></textarea>
                        <button type='submit' value="send">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;