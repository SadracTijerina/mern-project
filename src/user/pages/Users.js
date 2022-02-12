import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sadrac Tijerina",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Sa%C3%BAl_%C3%81lvarez.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
