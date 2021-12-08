/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { storage } from "../../../utils/FirebaseConfig";

export default function ProfileImg({userPicture, handleEditing, handleForm, user_details}:any) {

  const [profileImage, setProfileImage] = useState(userPicture
    ? userPicture
    :"https://firebasestorage.googleapis.com/v0/b/loremipsum-9d572.appspot.com/o/images%2Fplaceholder-image.jpg?alt=media&token=69b84e5c-ee38-4b68-a803-44af964327ce");

  const [url, setUrl] = useState("");

  //////////  FIREBASE PICTURE UPDATE  ///////////

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const chosenImage = file;
    if (chosenImage) {
      const uploadTask = storage.ref(`images/${chosenImage.name}`).put(chosenImage);
      uploadTask.on(
        "state_changed",
        snapshot => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(chosenImage.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
              setProfileImage(url);
              // UPDATE PROFILE OBJECT AND SEND IMAGE TO DB
              target.setAttribute('newimageurl', url);
              handleForm(e)
              handleEditing(true);
            });
        }
      );
    }
  }

  return (
    <div
      style={{ backgroundImage: `url(${profileImage})` }}
      className="w-60 h-60 m-5 pt-10 rounded-full bg-cover bg-center bg-no-repeat transform hover:shadow-purple">
      <input
        type="file"
        accept="image/gif, image/png, image/jpeg, image/jpg"
        id="profileImgUpload"
        className="h-full w-full rounded-full opacity-0 cursor-pointer"
        name="image"
        onChange={(e) => handleChange(e)} />
    </div>
  )
}