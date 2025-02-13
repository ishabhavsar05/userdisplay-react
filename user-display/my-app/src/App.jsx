import React from "react";
import Title from "./title";

import UserCard from "./UserCard";

export default function App() {
  return (
    <div>
      <Title />
      <UserCard
        name="Sai pallvi"
        avatar="https://preview.redd.it/sai-pallavi-for-amaran-promotions-v0-laloyn3urixd1.png?width=640&crop=smart&auto=webp&s=a2a3716a76bae17b9eedd97c3905d3b78df36b85"
        posts={34}
        followers={1024}
        address="Haidrabad"
      />
    </div>
  );
}
