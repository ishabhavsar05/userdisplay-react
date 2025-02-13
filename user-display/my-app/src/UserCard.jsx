import React, { useState } from "react";

export default function UserCard({ name, avatar, posts, followers, address }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const[count , setCount] = useState(followers)

  const change = () => {
    setIsFollowing(!isFollowing);
    setCount(isFollowing ? count-1 : count +1)
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        width: "250px",
        position:"absolute",
        left:"40%",
        top:"30%",
        backgroundColor:"lightblue"
      }}
    >
      {/* Profile Image */}
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2>{name}</h2>
      <p>{address}</p>

      <h3>Posts</h3>
      <p>{posts}</p>

      <h3>Followers</h3>
      <p>{count}</p>

      {/* Follow Button */}
      <button onClick={change}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}
