import React from "react";

import "./sidebarModal.css";

function SidebarModal(props) {
  return (
    <div
      className="sidebarmodal"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="sidebarmodal_content custom-scroll"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default SidebarModal;
