import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { FaEarDeaf, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { RxDragHandleDots2 } from "react-icons/rx";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="me-5">
      <div className="mb-2">
        <button className="btn btn-secondary me-1">Collapse All</button>
        <button className="btn btn-secondary me-1">View Progress</button>
        <button className="btn btn-secondary dropdown-toggle me-1">
          <FaRegCheckCircle className="me-1 mb-1" style={{ color: "lightgreen" }} />
          Publish All
        </button>
        <button className="btn btn-danger me-1">
          <FaPlus className="me-1 mb-1" />
          Module
        </button>
        <button className="btn btn-secondary">
          <FaEllipsisVertical />
        </button>
      </div>
      <hr />
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item mb-5 rounded-0 border-2 bg-body-secondary"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <button className="btn mb-2 p-0">
                    <RxDragHandleDots2 className="mb-1 p-0" />
                  </button>
                  <h5>{module.name}</h5>
                </div>
                <div className="mb-1 pb-2">
                  <button className="btn dropdown-toggle">
                    <FaCheckCircle style={{ color: "green" }} />
                  </button>
                  <button className="btn">
                    <FaPlus />
                  </button>
                  <button className="btn">
                    <FaEllipsisVertical />
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
