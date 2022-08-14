import React from "react";
import "./Sidebar.css";
import ant from "../../assets/ant.png";
import linkedin from "../../assets/linkedin.png";
import mdn from "../../assets/mdn.png";

// Here I have created a sidebar of my choice, containing icons that are links to three different pages.

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <a href="https://antcolony.io/" target="_blank">
        <img src={ant} alt={"atn"} />
      </a>
      <a
        href="https://www.linkedin.com/in/armin-%C4%8Di%C4%8Di%C4%87-b39833121/"
        target="_blank"
      >
        <img src={linkedin} alt={"linkedin"} />
      </a>
      <a href="https://developer.mozilla.org/en-US/" target="_blank">
        <img src={mdn} alt={"mdn"} />
      </a>
    </div>
  );
};

export default Sidebar;
