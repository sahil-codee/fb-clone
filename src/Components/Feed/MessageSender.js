import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    
  setInput("");
  setImageUrl("");

  }

  //Some Clever DB Stuff //

  return (
    <div className="messageSender">
      <div className="message__sender">
        <div className="messageSender__top">
          <Avatar />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="messageSender__input"
              placeholder={`What's on your mind?`}
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder={`image URL (optional)`}
            />
            <button onClick={handleSubmit} type="submit">
              Hidden Submit
            </button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
            <MoodIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
