import CreateBlogForm from "../components/BlogForm/CreateBlogForm";

import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { user } = useUser();
  console.log(user?.username);
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
        <h1> Welcome {user.username}</h1>
      </div>
      <h3>Dashboard</h3>
      <p>My dashboard stuff.....</p>
      <CreateBlogForm />
    </div>
  );
}
