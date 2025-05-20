import { useState } from "react";
import MyButton from "../reusable/Button/Button";
import "./welcome.css";

export default function Welcome() {
  const [modalSignup, setModalSignUp] = useState<boolean>(false);
  const [modalSignIn, setModalSignIn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [signUpButtonDisable, setSignUpButtonDisable] =
    useState<boolean>(false);
  const [signInButtonDisable, setSignInButtonDisable] =
    useState<boolean>(false);
  let modal: React.ReactNode = null;

  console.log(
    `Modal SignIn: ${modalSignIn}, Modal Sign Up ${modalSignup}, Modal State ${modalState}`
  );
  if (modalSignup) {
    modal = (
      <div className='sign-up'>
        <p>Sign-Up</p>
        <MyButton
          title='Close'
          onClick={() => {
            setModalSignUp(!modalSignup);
            setModalState(!modalState);
            setSignInButtonDisable(!signInButtonDisable);
          }}
          variant='primary'
        />
      </div>
    );
  } else if (modalSignIn) {
    modal = (
      <div className='sign-in'>
        <p>SignIn</p>
        <MyButton
          title='Close'
          onClick={() => {
            setModalSignIn(!modalSignIn);
            setModalState(!modalState);
            setSignUpButtonDisable(!signUpButtonDisable);
          }}
          variant='primary'
        />
      </div>
    );
  }

  return (
    <section className='welcome'>
      <div className='top-welcome'>
        <h2>Welcome</h2>
      </div>
      <div className='bottom-welcome'>
        <p>Please Sign-in or Sign-up: </p>
        <div className='bottom-container-welcome'>
          <MyButton
            title='Sign-Up'
            onClick={() => {
              setModalSignUp(!modalSignup);
              setModalState(!modalState);
              setSignInButtonDisable(!signInButtonDisable);
            }}
            variant='primary'
            disabled={signUpButtonDisable}
          />

          <MyButton
            title='Sign-In'
            onClick={() => {
              setModalSignIn(!modalSignIn);
              setModalState(!modalState);
              setSignUpButtonDisable(!signUpButtonDisable);
            }}
            variant='primary'
            disabled={signInButtonDisable}
          />
        </div>
        <div className={`${modalState ? "open" : "close"} modals`}>{modal}</div>
      </div>
    </section>
  );
}
