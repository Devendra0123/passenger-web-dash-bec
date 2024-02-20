import React from "react";

const UserCard = ({ name, image }) => {
  return (
    <div className="flex items-center gap-[10px]">
      {image && (
        <div>
          <img
            src={image}
            alt="userImage"
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
      )}

      <p>{name}</p>
    </div>
  );
};

export default UserCard;
