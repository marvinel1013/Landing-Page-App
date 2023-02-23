import React from "react";

function AppButton(props) {
  const { title, onClick, className } = props;
  return (
    <button
      className={
        " bg-primary text-secondary rounded-lg border-2 border-primary hover:bg-transparent duration-300 ease-in hover:text-primary" +
        " " +
        className
      }
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default AppButton;
