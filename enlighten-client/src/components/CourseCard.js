import React from "react";
import { Card, Row, Col } from "antd";
import { StarTwoTone } from "@ant-design/icons";
import courseImg from "../Media/courseImg.png";
import Meta from "antd/es/card/Meta";

const card = {
  width: "500px",
  padding: "0px",
  margin: "30px 40px",
  textAlign: "left",
};

const cardDesc = {
  fontSize: "20px",
  fontWeight: "bold",
};

const items = [
  {
    courseTitle: "UI/UX Design",
    rating: "4.5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "56.00",
  },
  {
    courseTitle: "Python",
    rating: "3.5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "66.00",
  },
  {
    courseTitle: "Java",
    rating: "5.0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    price: "44.00",
  },
];

export default function CourseCard() {
  return (
    <>
      {items.map((item) => (
        <Card
          style={card}
          bordered={false}
          cover={<img alt="course" src={courseImg} />}
        >
          <Row>
            <Col style={cardDesc} span={10}>
              {item.courseTitle}
            </Col>
            <Col span={4}></Col>
            <Col
              style={{ textAlign: "end", fontWeight: "bold", fontSize: "20px" }}
              span={8}
            >
              <StarTwoTone className="mx-2" twoToneColor="#ffe234" />
              {item.rating}
            </Col>
          </Row>
          <Row>
            <Col span={24} className="my-2 text">
              <Meta description={item.description} />
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ fontWeight: "" }}>
              ${item.price}
            </Col>
            <Col span={12}></Col>
          </Row>
        </Card>
      ))}
    </>
  );
}
