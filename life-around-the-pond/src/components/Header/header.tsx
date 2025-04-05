import "./header.css";

export default function Header() {
  let headerText: string = "Life Around The Pond";

  return (
    <header id='header'>
      <h1 id='mainText'>{headerText}</h1>
    </header>
  );
}
