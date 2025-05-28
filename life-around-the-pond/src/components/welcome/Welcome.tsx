import { useState } from "react";
import MyButton from "../reusable/Button/Button";
import "./welcome.css";
import { toast } from "react-toastify";
import { useUser } from "../../context/UserContext";

export default function Welcome() {
  const [modalSignup, setModalSignUp] = useState<boolean>(false);
  const [modalSignIn, setModalSignIn] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [signUpButtonDisable, setSignUpButtonDisable] =
    useState<boolean>(false);
  const [signInButtonDisable, setSignInButtonDisable] =
    useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  let modal: React.ReactNode = null;
  const { login } = useUser();

  const errorToast = (msg: string) => {
    toast(msg);
  };
  const successToast = (msg: string) => {
    toast(msg);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      errorToast("Oops your Passwords did not match, try again!");
      console.log("no match");
      return;
    }
    if (password.length < 8) {
      errorToast("your password needs to have at least 8 characters");
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        console.error("Server Error response:", data);
      }

      localStorage.setItem("token", data.token);
      console.log(data.token);
      successToast("User registered, Welcome!");
      setUserName("");
      setPassword("");
      setPasswordConfirm("");
    } catch (err) {
      console.log(`${err} fetch failed in welcome`);
      setUserName("");
      setPassword("");
      setPasswordConfirm("");
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        errorToast("Login Failed");
        console.log(data.error);
        return;
      }
      successToast("welcome back!");
      localStorage.setItem("token", data.token);
      login(data.token);
      console.log(data);
    } catch (err) {
      console.log(err);
      errorToast("Something went wrong");
    }
    setUserName("");
    setPassword("");
  }
  //
  if (modalSignup) {
    modal = (
      <div className='sign-up'>
        <h4>Sign-Up: </h4>
        <h5>Welcome to Tadpole-Logic's Life around the Pond</h5>
        <form className='form-signUp' onSubmit={handleSubmit}>
          <label>
            User Name:
            <input
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type='password'
              name='passwordConfirm'
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
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
        <form className='form-signUp' onSubmit={handleLogin}>
          <label>
            User Name:
            <input
              type='text'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
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
      </div>
      <div className={`${modalState ? "open" : "close"} modals`}>{modal}</div>
    </section>
  );
}
