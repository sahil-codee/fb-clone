import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://motivationalfact.com/wp-content/uploads/2020/05/Johnny-depp-quotes.jpg"
        profileSrc="https://i.pinimg.com/280x280_RS/b5/69/bb/b569bb833ce6d62756d727ff87b81cb0.jpg"
        title="Sahil Bakshi"
      />
      <Story
        image="https://pbs.twimg.com/media/EYiahWwXkAEugOO.jpg"
        profileSrc="https://failurebeforesuccess.com/wp-content/uploads/2022/02/original.jpg"
        title="Jay-z"
      />
      <Story
        image="https://1.bp.blogspot.com/-TL3aT49pOUk/YP__yCPXZGI/AAAAAAAAB60/q8vMZIAg14oKJF5UZPziCB1XmAbD1h9MACLcBGAsYHQ/s2048/PicsArt_07-27-06.12.57.jpg"
        profileSrc="https://images.mid-day.com/images/images/2015/oct/28-Julia-Roberts-birthday.jpg"
        title="Julia Robert"
      />
      <Story
        image="https://www.scrolldroll.com/wp-content/uploads/2019/07/life-quotes-1.jpg"
        profileSrc="https://assets.entrepreneur.com/content/3x2/2000/4-secrets-lifelong-success-martha-stewart.jpg"
        title="Martha Stewart"
      />
      <Story
        image="https://cdn.quotesgram.com/img/29/11/997724814-tumblr_m1ix5wNDoW1rpaqmso1_1280.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg"
        title="Snoop Dog"
      />
    </div>
  );
}

export default StoryReel;
