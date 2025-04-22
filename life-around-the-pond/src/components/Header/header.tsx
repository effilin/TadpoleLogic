import MyButton from "../reusable/Button/Button";
import { useState } from "react";
import "./header.css";

export default function Header() {
  let headerText: string = "Life Around The Pond";
  const [modalControl, setModalControl] = useState<Boolean>(false);

  const click = () => {
    console.log("hello");
    setModalControl(!modalControl);
  };

  return (
    <header id='header'>
      <div></div>
      <h1 id='mainText'>{headerText}</h1>
      <div className='menuBox'>
        <MyButton title='Menu' onClick={click} variant='primary' />
        {modalControl && <div> Hey </div>}
      </div>
    </header>
  );
}
