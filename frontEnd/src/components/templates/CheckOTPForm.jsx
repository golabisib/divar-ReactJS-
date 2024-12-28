import PropTypes from 'prop-types';

CheckOTPForm.propTypes = {
    code: PropTypes.string.isRequired,
    setCode: PropTypes.func.isRequired,
    mobile: PropTypes.string.isRequired,
    setStep: PropTypes.func.isRequired,
};

function CheckOTPForm({ code, setCode, mobile, setStep }) {
    const SubmitHandler = event => {
        event.preventDefault();
        if (code.length !== 5) return;
        
    }
  return (
    <div>
        <form onSubmit={SubmitHandler}>
            <p>تایید کد پیامک شده.</p>
            <span>کد پیامک شده به شماره |{mobile}| را وارد کنید.</span>
            <label htmlFor="input"> کد تایید را وارد کنید.</label>
            <input type="text" id="input" placeholder="کد تایید" value={code} onChange={e => setCode(e.target.value)} />
            <button type="submit"> ورود</button>
            <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
        </form>
    </div>
  )
}

export default CheckOTPForm;
