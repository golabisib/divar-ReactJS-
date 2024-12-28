import { useState } from "react";
import CheckOTPForm from "../components/templates/CheckOtpForm"
import SendOTPForm from "../components/templates/SendOtpForm"


function AuthPage() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState('');
    const [code, setCode] = useState('');
  return (
    <div>
        {step == 1 && <SendOTPForm setStep={setStep} mobile={mobile} setMobile={setMobile} />}
        {step == 0 && <CheckOTPForm />}
    </div>
  )
}

export default AuthPage
