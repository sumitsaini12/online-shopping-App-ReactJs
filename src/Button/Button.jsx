import React, { memo } from 'react';

function Button(props) {

  let theme = "bg-red-500 hover:bg-red-600 text-white";

  if (props.theme == "secondary") {
    theme = "bg-red-300 hover:bg-gray-200 text-gray-400";
  };

  return (
    <button className={`px-12 py-2 rounded-md bg-red-500 font-medium text-2xl ` + theme} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
}

export default memo(Button)
