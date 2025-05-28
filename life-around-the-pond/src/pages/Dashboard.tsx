import CreateBlogForm from "../components/BlogForm/CreateBlogForm";
import { User } from "../types/User";

type DashboardProp = {
  user: User;
};
export default function Dashboard({ user }: DashboardProp) {
  const { id, username, profileImgUrl, authLevel, createdAt, updatedAt } = user;
  const profilePic = profileImgUrl
    ? profileImgUrl
    : "https://res.cloudinary.com/tadpole-logic/image/upload/v1747935942/Untitled_jyxmjd.png";
  return (
    <div>
      <div className='accountInfo'>
        <img className='accountImg' src={profilePic}></img>
      </div>
      <h3>Dashboard</h3>
      <p>My dashboard stuff.....</p>
      <CreateBlogForm />
    </div>
  );
}
