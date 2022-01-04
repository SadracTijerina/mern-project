import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sadrac Tijerina",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg/800px-%D0%A1%D0%B0%D1%83%D0%BB%D1%8C_%D0%90%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%B5%D1%81.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
