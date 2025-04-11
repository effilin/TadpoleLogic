import MyButton from "../reusable/Button/Button";
import "./header.css";

export default function Header() {
  let headerText: string = "Life Around The Pond";

  const click = () => console.log("hello");

  return (
    <header id='header'>
      <h1 id='mainText'>{headerText}</h1>
      <MyButton title='menu' onClick={click} variant='primary' />
    </header>
  );
}
