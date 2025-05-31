import "./updateAccountForm.css";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
type MyProps = {
  onClose: () => void;
};
export default function UpdateAccountForm({ onClose }: MyProps) {
  const { user } = useUser();
  const [userName, setName] = useState(user?.username);
  const [profileImg, setProfileImg] = useState(user?.profileImgUrl);
  return (
    <div className='update-account-container'>
      <button onClick={onClose}>X</button>
      <form>
        <label>
          Update Username
          <input
            type='text'
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Update Profile Picture
          <input
            type='text'
            value={profileImg}
            onChange={(e) => setProfileImg(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
