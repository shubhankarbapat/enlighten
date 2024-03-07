import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute.js";
import { useEffect, useState } from "react";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructor-courses");
    setCourses(data);
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
      {/* {courses &&
        courses.map((course) => (
          <>
            <div className="media pt-2">
              <Avatar
                size={80}
                src={course.image ? course.image.Location : "/course.png"}
              />
              <div className="media-body pl-2">
                <div className="row">
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </>
        ))} */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt={course.name} src={course.image} />}
            >
              <Card.Meta
                title={course.name}
                description={`Instructor: ${course.instructor}`}
              />
              <div style={{ marginTop: "10px" }}>
                <p>Price: {course.price}</p>
                <p>Duration: {course.duration}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* <Rate disabled allowHalf defaultValue={course.rating} /> */}
                  <span style={{ marginLeft: "10px" }}>{course.rating}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </InstructorRoute>
  );
};

export default InstructorIndex;
