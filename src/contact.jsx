const Contact = () => {

    return (
        <div className="contactus" align="center">
            <form name="contact" method="POST" data-netlify="true">
                <h3 className='entryHeading'>Contact</h3>
                {/* <i>e-mail: </i> */}
                <input type='email' className='inputtag' name="email" placeholder='e-mail' required />
                <br />
                <input type='text' className='inputtag' name="name" placeholder='Your_Name' required />
                <br />
                {/* <i>Message: </i> */}
                <textarea type='text' className='inputmsg' name="message" placeholder='Please enter your message here...' required rows={4} cols={30} />
                <br />
                <button type="submit" className="button1">Send</button>
                <br />
                {/* //store message  in a file with date-time */}
            </form>
        </div>
    );
}

export default Contact;
