import React from "react";

const Sidebar = () => {
  //   let fullName = "Jhon";
  const [fullName, setFullName] = React.useState("Jhon");
  const [isShow, setIsShow] = React.useState(false);

  const changeName = () => {
    setFullName("Jhon mayer");
    setIsShow(!isShow);
  };

  React.useEffect(() => {
    console.log("First time");
  }, []);

  React.useEffect(() => {
    console.log("When Fullname change");
  }, [fullName]);
  return (
    <>
      <h3>Sidebar</h3>
      <p>Hello {fullName} </p>
      {isShow && <p>Hello Again</p>}
      <button onClick={changeName}>Change Your Name</button>
    </>
  );
};

export default Sidebar;
