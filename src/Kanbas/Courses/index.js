import db from "../../Kanbas/Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const URL = "http://localhost:4000/api/courses";

  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="ms-4 mt-3">
      <div className="ms-2 w-100">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <FaBars
              className="mb-2"
              style={{ color: "red", width: 30, height: 30 }}
            />
            <label
              className="ms-4"
              style={{ color: "red", fontSize: 24 }}
              aria-current="page"
            >
              {course.number} 01 FA23
            </label>
          </div>
          <button className="btn btn-secondary float-end">Student View</button>
        </div>
        <hr />
      </div>
      <label className="ms-4 mb-3 text-secondary">
        <i>202410_1 Fall 2023 Semester</i>
      </label>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: 400, top: 95 }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
