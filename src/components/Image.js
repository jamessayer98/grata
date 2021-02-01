import React, { useState } from "react";
import LoadingAvatar from "./LoadingAvatar";
import { useSelector } from "react-redux";
import { CImg } from "@coreui/react";

const Image = () => {
  const noImg = "avatars/no-image.png";
  const { avatar, status } = useSelector((state) => state.user);
  const { service } = useSelector((state) => state.services);
  const [avatarUrl, setAvatarUrl] = useState(noImg);

  if (service && service.media === "") {
    return (
      <div className="text-center">
        <CImg
          src="avatars/no-image.png"
          width="150px"
          height="150px"
          alt="User Avatars"
          className="round img-thumbnail"
        />
      </div>
    );
  } else if (avatar && avatar !== "") {
    var reader = new FileReader();

    reader.onload = function () {
      setAvatarUrl(reader.result);
    };

    reader.readAsDataURL(avatar);
  }

  if (status === "GET_AVATAR_SUCCESS") {
    return (
      <div className="text-center">
        <CImg
          src={avatarUrl}
          width="150px"
          height="150px"
          alt="User Avatars"
          className="round img-thumbnail"
        />
      </div>
    );
  } else if (status === "GET_AVATAR_PENDING") {
    return <LoadingAvatar />;
  } else {
    return (
      <div className="text-center">
        <CImg
          src="avatars/no-image.png"
          width="150px"
          height="150px"
          alt="User Avatars"
          className="round img-thumbnail"
        />
      </div>
    );
  }
};

export default Image;
