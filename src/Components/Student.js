import React from "react";
import Footer from "./Footer";
import "./Student.css";

function Student() {
  return (
    <>
      <div>
        <div className="box-v1" id="km">
          <h4 style={{ marginLeft: 500, paddingTop: 40 }}>
            Student Testimonial
          </h4>
     
        </div>
        <div>
          <video width="330" height="330" controls style={{ marginLeft: 100 }}>
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/ogg"
            />
          </video>

          <video width="330" height="330" controls style={{ marginLeft: 30 }}>
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/ogg"
            />
          </video>

          <video width="330" height="330" controls style={{ marginLeft: 30 }}>
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/mp4"
            />
            <source
              src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
              autoPlay
              loop
              muted
              type="video/ogg"
            />
          </video>
          <div className="km">
            <video width="330" height="330" controls style={{ marginLeft: 100 }}>
              <source
                src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
                autoPlay
                loop
                muted
                type="video/mp4"
              />
              <source
                src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
                autoPlay
                loop
                muted
                type="video/ogg"
              />
            </video>

            <video width="330" height="330" controls style={{ marginLeft: 30 }}>
              <source
                src="https://youtu.be/VrGcY2k5zuc"
                autoPlay
                loop
                muted
                type="video/mp4"
              />
              <source
                src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
                autoPlay
                loop
                muted
                type="video/ogg"
              />
            </video>
            <video width="330" height="330" controls style={{ marginLeft: 30 }}>
              <source
                src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
                autoPlay
                loop
                muted
                type="video/mp4"
              />
              <source
                src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"
                autoPlay
                loop
                muted
                type="video/ogg"
              />
            </video>
          </div>
        </div>
        <div style={{ marginTop: 30 }}></div>
        <Footer/>
      </div>
    </>
  );
}

export default Student;
