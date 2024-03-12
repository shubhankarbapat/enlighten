import React from "react";
import { Flex, Image, Typography, Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import heroImg from "../Media/heroImg.jpg";
import CourseCard from "../components/CourseCard";
import "./Home.css";

const { Title, Text } = Typography;
const heroBadge = {
  backgroundColor: "#F1F9EE",
  border: "1px solid white",
  width: "200px",
  padding: "5px",
  textAlign: "center",
  borderRadius: "20px",
  color: "#33726A",
  fontWeight: "bold",
};

const heroSection = {
  backgroundColor: "#1d6361",
  padding: "50px   150px",
};

const heroSecTitle = {
  color: "white",
  fontSize: "100px",
  margin: "0rem",
};

const heroDesc = {
  paddingRight: "100px",
};

const heroSecDesc = {
  color: "white",
  fontSize: "20px",
  margin: "2rem 0",
};

const heroSecImg = {
  borderRadius: 10,
};

const heroSecBtn = {
  margin: "20px 0",
};

const heroSecBtn1 = {
  backgroundColor: "white",
  padding: "10px 12px",
  color: "#1d6361",
  width: "200px",
  height: "50px",
  fontSize: "medium",
  fontWeight: "bold",
  margin: "0 20px 0 0",
};

const arrowIconStyle = {
  width: "20px",
  paddingTop: "0px",
};

const heroSecBtn2 = {
  backgroundColor: "#1d6361",
  padding: "10px 12px",
  color: "white",
  border: "1px solid white",
  width: "200px",
  height: "50px",
  fontSize: "medium",
  fontWeight: "bold",
};

const courseSec = {
  padding: "20px 150px",
  textAlign: "center",
};



function Home() {
  return (
    <>
      <Flex justify="space between" style={heroSection}>
        <Flex vertical style={heroDesc}>
          <Text style={heroBadge}>ENHANCE YOUR CAREER</Text>
          <Title level={1} style={heroSecTitle}>
            Boost your skillset with us
          </Title>
          <Text style={heroSecDesc}>
            Empower your learning journey with our comprehensive educational
            website! Access a wealth of resources, from interactive lessons to
            engaging quizzes, designed to enhance your knowledge and skills
            across various subjects.
          </Text>
          <Flex style={heroSecBtn}>
            <Button style={heroSecBtn1}>
              Get Started <ArrowRightOutlined style={arrowIconStyle} />
            </Button>
            <Button style={heroSecBtn2}>Learn More</Button>
          </Flex>
        </Flex>
        <Flex>
          <Image preview={false} width={500} style={heroSecImg} src={heroImg} />
        </Flex>
      </Flex>
      <Flex vertical style={courseSec}>
        <Title className="mt-5">Our Popular Courses</Title>
        <Title level={5} className="mt-0">
          The most popular courses presented to you
        </Title>
        <Flex>
            <CourseCard/>
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
