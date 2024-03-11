import React from "react";
import { Carousel } from "antd";
import img1 from "../images/pexels-andrea-piacquadio-3776859.jpg";
import img2 from "../images/pexels-hong-son-13091880.jpg";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const imageStyle = {
  width: "calc(100% - 40px)", // Subtract 40px for 20px margin on each side
  margin: "0 20px", // 20px margin on both sides
};

function Home() {
  return (
    <div>
      <div className="jumbotron square">Enlighten</div>
      {/* <Carousel autoplay>
        <div>
          <img src={img1} style={{ ...contentStyle, ...imageStyle }}></img>
        </div>
        <div>
          <img src={img2} style={{ ...contentStyle, ...imageStyle }}></img>
        </div>
      </Carousel> */}
    </div>
  );
}

export default Home;
