import { useState } from "react";
import CreateBlogForm from "../components/BlogForm/CreateBlogForm";
import MyButton from "../components/reusable/Button/Button";
import { useUser } from "../context/UserContext";
import "./dashboard.css";
import UpdateAccountForm from "../components/UpdateAccountForm/UpdateAccountForm";

export default function Dashboard() {
  const { user } = useUser();
  const [openModel, setOpenModel] = useState<boolean>(false);
  const close = () => setOpenModel(!openModel);
  let formattedDate: string = "";
  const makeMyDate = () => {
    if (!user?.createdAt) {
      return (formattedDate = "");
    }
    const myDate = new Date(user.createdAt);
    const readableDate = `${myDate.getMonth()}/${myDate.getDate()}/${myDate.getFullYear()}`;
    return (formattedDate = readableDate);
  };
  makeMyDate();

  const profilePic = () => {
    if (!user || !user.profileImgUrl) {
      return "https://res.cloudinary.com/tadpole-logic/image/upload/v1747935942/Untitled_jyxmjd.png";
    }
    return user.profileImgUrl;
  };
  if (!user) {
    return <h1> please Log in</h1>;
  }

  return (
    <div>
      <div className='accountInfo'>
        <img className='accountImg' src={profilePic()}></img>
        <div className='divider-left'>
          <h1> Welcome {user.username}</h1>
        </div>
      </div>
      <div className='mainDash'>
        <aside className='accountAside'>
          <h3> Account </h3>

          {!user || user.username === "" ? (
            <h2>Please sign In</h2>
          ) : (
            <div>
              <h4 className='underline'>update account info:</h4>
              <h5>account created: {formattedDate} </h5>
              <h5>account updated at: </h5>
              <MyButton
                title='Update Profile'
                onClick={() => {
                  console.log("Press it real good");
                  setOpenModel(!openModel);
                }}
                variant='clear'
              />
              {openModel ? <UpdateAccountForm onClose={close} /> : null}
            </div>
          )}
        </aside>
        <h3>Dashboard</h3>
        <p>My dashboard stuff.....</p>
        <CreateBlogForm />
      </div>
    </div>
  );
}
