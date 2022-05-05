import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        className="widget__iframe"
        title="Meta Page"
        src="https://www.facebook.com/plugins/page.php?
        href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=240&
        height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&
        appId"        
        style={{ border: "none", overflow: "hidden" }}
        width="240"
        height="100%"
        scrolling="yes"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
