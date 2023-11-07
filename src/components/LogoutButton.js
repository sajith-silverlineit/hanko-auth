import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState(null);

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) => {
      setHanko(new Hanko(process.env.REACT_APP_HANKO_API_URL || ""));
    });
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}

export default LogoutBtn;
