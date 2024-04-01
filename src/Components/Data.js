import React from "react";
import "./Data.css";
// import { Button } from "bootstrap";

function Data() {
  return (
    <>
      <div className="content-box">
        <div className="content">
          <div className="text">
            <h1>Online Classes</h1>
            <p>
              Dear Students/Parents, Nifa presents its Learning App for your
              regular art practice in which we have added many amazing features
              Like: Step-by-step recorded demo videos prepared by your faculty
              members. Regular assessment of your practise through assignment
              section. Live class section from same app. Attendance, payment
              invoice, art news, announcements, important information and direct
              connect with the management team are some more features. So hurry
              up n join now to experience personalised coaching by experts
              sitting at your home. We wish u Happy Learning. Stay Safe n
              Healthy.
            </p>
            <button className="btn">ReadMore</button>
          </div>
          <div className="video-container">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/-9cJjaLXKqE"
              title="NIFA ( Best Art Institute )"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
