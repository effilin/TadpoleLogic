import "./updateAccountForm.css";
import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
type MyProps = {
  onClose: () => void;
};
export default function UpdateAccountForm({ onClose }: MyProps) {
  const { user } = useUser();
  const [userName, setName] = useState(user?.username);
  const [profileImg, setProfileImg] = useState(user?.profileImgUrl);

  useEffect(() => {
    async function handleImageUpdate(e: React.FormEvent) {
      e.preventDefault();
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/users`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          }
        );
        const data = await response.json();
        if (!response.ok) {
          console.log(data.error);
          return;
        }

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  }, [profileImg]);
  return (
    <div className='update-account-container'>
      <button onClick={onClose}>X</button>
      <form encType='mutipart/form-data'>
        <label>
          Update Username
          <input
            type='text'
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Update Picture
          <input
            name='image'
            type='file'
            accept='image/png, image/jpeg'
          ></input>
        </label>
        <button type='submit'> update account </button>
      </form>
    </div>
  );
}
