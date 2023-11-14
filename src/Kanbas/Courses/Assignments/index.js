import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { RxDragHandleDots2 } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <h2>Assignments</h2>
      <div className="list-group me-5">
        <div className="d-flex justify-content-between align-items-center bg-body-secondary border-2">
          <div className="d-flex align-items-center">
            <button className="btn my-2 ms-3 me-2 p-0 dropdown-toggle">
              <RxDragHandleDots2 />
            </button>
            <label style={{ fontSize: 20, fontWeight: 600 }}>ASSIGNMENTS</label>
          </div>
          <div className="d-flex align-items-center me-3">
            <div className="bg-white rounded-pill">
              <span className="p-2">40% of Total</span>
            </div>
            <button className="btn">
              <FaPlus />
            </button>
            <button className="btn">
              <FaEllipsisVertical />
            </button>
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item rounded-0"
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <button className="btn mb-2 me-2 p-0">
                  <RxDragHandleDots2 />
                </button>
                <button className="btn mb-2 me-4 p-0">
                  <TfiWrite style={{ color: "green" }} />
                </button>
                <div className="d-flex flex-column">
                  <h5>
                    {assignment._id} - {assignment.title}
                  </h5>
                  <div>
                    <a
                      href="#"
                      className="me-2"
                      style={{ color: "red", textDecoration: "none" }}
                    >
                      Multiple Modules
                    </a>
                    |<span className="mx-2">Due Sep 18 at 11:59pm</span>|
                    <span className="ms-2">100 pts</span>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn">
                  <FaCheckCircle style={{ color: "green" }} />
                </button>
                <button className="btn">
                  <FaEllipsisVertical />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
