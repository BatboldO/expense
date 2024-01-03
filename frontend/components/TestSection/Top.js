import { UserContext } from "@/context/UserProvider";
import React, { useContext } from "react";

const Top = () => {
  const { user } = useContext(UserContext);
  console.log("=====>", user);

  return <div>Top-{user.name}</div>;
};

export default Top;
