import styled from 'styled-components';
// SEND OTP ON BUTTON CLICK AND VERIFY OTP
const Login = () => {

    const Loginone = styled.div`
        padding: 10px;
        display: flex;
        flex-direction: column;
        /* max-width: 1200px; */
        margin: 0px;
        align-items: center;
        margin-left: 550px;
        margin-right: 550px;
        margin-top: 10rem;
        margin-bottom: 10rem;
        color: #425F57;
        background-color: #DFF6FF;
        /* bg white if there is bg image */
        /* border-bottom: 1px solid #f2f2f2; */
        /* box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px; */
        /* box-shadow: #354a53 -50px 20px 30px -10px; */
        /* box-shadow: #06283D   -35px 25px 30px -20px; */
        box-shadow: #84aab9 -35px 25px 30px -20px;
        border-radius: 1rem;
    `
    const Base = styled.h1`
            display: flex;
            flex-direction: column;
            border-radius: 1rem;
            padding: 15px;
            height: 1rem;
            width: 20rem;
            text-align: center;
            border: 0px;
        `
        const Btn = styled.button`
            width: 100px;
            height: 30px;
            font-size: 21px;
            font-weight: bold;
            margin-left: 7rem;            
            color: #06283D;
            background-color: white;
            border-color: #06283D;
            border-radius: 1rem;
        `
    return (
        <Loginone>
            <form name="login" method="GET" data-netlify="true">
                <Base>Verify Login</Base>
                <Base>
                    <input type='number' className='inputtag' name="OTP" placeholder='OTP' min="6" max="6" required />
                </Base>
                <Base>
                    <input type='number' className='inputtag' name="confirmOTP" placeholder='Re-enter OTP' min="6" max="6" required />
                </Base>
                <Btn>
                    {/* <button type="submit" className="btn-login">Login</button> */}
                    LogIn
                </Btn>
                {/* //store message  in a file with date-time */}
            </form>
        </Loginone>
    );
}

export default Login;
