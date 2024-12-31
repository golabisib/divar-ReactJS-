import PropTypes from 'prop-types';

import { sendOTP } from 'services/auth';

SendOTPForm.propTypes = {
    setStep: PropTypes.func.isRequired,
    mobile: PropTypes.string.isRequired,
    setMobile: PropTypes.func.isRequired,
};

function SendOTPForm({setStep, mobile, setMobile}) {
    const submitHandler = async (event) => {
        event.preventDefault();

        if (mobile.length !== 11) return;
        const { response, error } = await sendOTP(mobile);

        if(response){
            setStep(2);
        }
        if(error){
        console.log(error.response.data.message);
        }
    }
  return (
    <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <span>برای استفاده از امکانات،لطفا شماره تلفن همراه خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.</span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید.</label>
        <input type="text" id="input" placeholder="شماره موبایل" value={mobile} onChange={e => setMobile(e.target.value)}/>
        <button type="submit"> ارسال کد تایید </button>
    </form>
  )
}

export default SendOTPForm
