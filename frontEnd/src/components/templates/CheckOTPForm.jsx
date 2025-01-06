import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { checkOTP } from 'services/auth';
import { getProfile } from 'src/services/user';
import cookiesUtils from 'src/utils/cookie';

const {setCookie} = cookiesUtils;

import styles from './CheckOTPForm.module.css';

CheckOTPForm.propTypes = {
    code: PropTypes.string.isRequired,
    setCode: PropTypes.func.isRequired,
    mobile: PropTypes.string.isRequired,
    setStep: PropTypes.func.isRequired,
};

function CheckOTPForm({ code, setCode, mobile, setStep }) {
    const navigate = useNavigate();
    const {refetch} = useQuery(["profile"], getProfile);

    const SubmitHandler = async (event) => {
        event.preventDefault();
        if (code.length !== 5) return;
        const {response, error} = await checkOTP(mobile, code)
        if(response){
            console.log(response.data.message);
            navigate("/");
            refetch();
            setCookie(response.data);
        }
        if(error){
            console.log(error.response.data.message);
        }
    }
  return (
    <div>
        <form onSubmit={SubmitHandler} className={styles.form}>
            <p>تایید کد پیامک شده.</p>
            <span>کد پیامک شده به شماره |{mobile}| را وارد کنید.</span>
            <label htmlFor="input"> کد تایید را وارد کنید.</label>
            <input type="text" id="input" placeholder="کد تایید" value={code} onChange={e => setCode(e.target.value)} autoComplete='off' />
            <button type="submit"> ورود</button>
            <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
        </form>
    </div>
  )
}

export default CheckOTPForm;
