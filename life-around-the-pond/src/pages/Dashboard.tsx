import CreateBlogForm from "../components/BlogForm/CreateBlogForm";
import { useUser } from "../context/UserContext";
import "./dashboard.css";

export default function Dashboard() {
  const { user } = useUser();
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
        <div className='divider-left'>
          <h5>account created: {formattedDate} </h5>
          <h5>account updated at: </h5>
        </div>
      </div>
      <div className='mainDash'>
        <aside className='accountAside'>
          <h3> Account </h3>
          <div>
            <h4 className='underline'>update account info:</h4>
          </div>
        </aside>
        <h3>Dashboard</h3>
        <p>My dashboard stuff.....</p>
        <CreateBlogForm />
      </div>
    </div>
  );
}
