import MyButton from "../reusable/Button/Button";
import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  let headerText: string = "Life around the pond changes with the seasons";
  const [modalControl, setModalControl] = useState<Boolean>(false);

  const click = () => {
    console.log("hello");
    setModalControl(!modalControl);
  };

  return (
    <header id='header'>
      <h1 id='mainText'>{headerText}</h1>
      <div className='menuBox'>
        <MyButton title='Menu' onClick={click} variant='clear' />
        <div id='navMenu' className={modalControl ? "open" : "nav-inactive"}>
          <nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-inactive"
              }
              to='/'
              end
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-inactive"
              }
              to='/about'
              end
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-inactive"
              }
              to='/life-around-the-pond'
              end
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-inactive"
              }
              to='/dashboard'
              end
            >
              Dashboard
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
