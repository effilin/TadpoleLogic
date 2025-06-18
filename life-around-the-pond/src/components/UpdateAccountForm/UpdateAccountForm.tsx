import "./updateAccountForm.css";
import { useUser } from "../../context/UserContext";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
type MyProps = {
  onClose: () => void;
};
export default function UpdateAccountForm({ onClose }: MyProps) {
  const { user } = useUser();
  const [userName, setName] = useState<string>(user?.username || "");
  const [profileImg, setProfileImg] = useState<File | string | null>(
    user?.profileImgUrl || null
  );

  const handleImageUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImg(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", userName);
    if (profileImg instanceof File) {
      formData.append("profile_image", profileImg);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/users`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("Profile Updated");
        toast(" Profile Updated");
      }
      if (!response.ok) {
        console.log(data.error);
        return;
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='update-account-container'>
      <div className='formContainer'>
        <button className='closebtn' onClick={onClose}>
          X
        </button>

        <form
          className='inputContainer'
          encType='mutipart/form-data'
          onSubmit={handleSubmit}
        >
          <label className='formLabel'>
            Update Username
            <input
              type='text'
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className='formLabel'>
            Update Picture
            <input
              name='image'
              type='file'
              accept='image/png, image/jpeg'
              onChange={handleImageUpdate}
            ></input>
          </label>
          <button type='submit'> update account </button>
        </form>
      </div>
    </div>
  );
}
