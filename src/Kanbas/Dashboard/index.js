import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-5 mt-3">
      <h1>Dashboard</h1>
      <hr />
      <h3>Published Courses (3)</h3>
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <div className="card mb-3 me-3" key={course._id}>
            <Link
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item"
            >
              <img
                src="../images/background.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-img-overlay"></div>
              <div className="card-body">
                <h5 className="card-title text-truncate">{course.name}</h5>
                <label htmlFor="course-id" style={{ color: "gray" }}>
                  {course.number}
                </label>
                <br />
                <label
                  htmlFor="course-info"
                  style={{ color: "darkgray", fontSize: 13 }}
                >
                  Fall 2023 Semester Full Term
                </label>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
