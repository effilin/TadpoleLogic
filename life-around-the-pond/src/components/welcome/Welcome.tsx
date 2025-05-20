import MyButton from "../reusable/Button/Button";
import "./welcome.css";

export default function Welcome() {
  return (
    <section className='welcome'>
      <div className='top-welcome'>
        <h2>Welcome</h2>
      </div>
      <div className='bottom-welcome'>
        <p>Please Sign-in or Sign-up</p>
        <div>
          <MyButton
            title='Sign-Up'
            onClick={() => console.log("hello")}
            variant='primary'
          />
          <MyButton
            title='Sign-In'
            onClick={() => console.log("hello")}
            variant='primary'
          />
        </div>
      </div>
    </section>
  );
}
