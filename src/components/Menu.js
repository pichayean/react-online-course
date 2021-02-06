import React from "react";
import useHover from "../hooks/UseHover";
const Menu = () => {
  const [hover, attrs] = useHover();
  //   const [hover, setHover] = React.useState(false);

  //   const mouseOver = () => {
  //     setHover(true);
  //   };
  return (
    <div>
      <h1>Menu</h1>
      {hover ? <h3>main menu</h3> : null}
      <img {...attrs} src="./logo192.png" alt="logo" />
    </div>
  );
};

export default Menu;
