import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="ms-5 mt-3">
      <h1>Dashboard</h1>
      <hr />
      <h3>Published Courses ({courses.length})</h3>
      <hr />
      <div className="d-flex flex-column align-items-center">
        <div className="w-50 mb-3">
          <h5>New Course</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <div className="mt-2">
            <button
              className="btn btn-success float-end ms-2"
              onClick={() => addNewCourse()}
            >
              Add
            </button>
            <button
              className="btn btn-primary float-end"
              onClick={() => updateCourse()}
            >
              Update
            </button>
          </div>
        </div>
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
              </Link>
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
                <div className="d-flex justify-content-evenly mt-1">
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
