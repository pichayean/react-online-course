import React from "react";
import Footer from "./Footer";
import Title from "../styles/title/Title";

const Header = () => {
  let companyName = "CCT";
  const compName = <p>Roi-et</p>;
  const isLogin = true;
  const showMe = () => {
    return alert("me");
  };
  return (
    <>
      <Title>Hello React</Title>
      <h1>Header {companyName}</h1>
      {compName}

      {isLogin && (
        <>
          <p>wellcome</p>
          <p>wellcome</p>
        </>
      )}

      <button onClick={showMe}>Show Me!</button>
    </>
  );
};

export default Header;
