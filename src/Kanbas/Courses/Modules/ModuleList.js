import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  return (
    <div className="me-5">
      <div className="mb-2">
        <button className="btn btn-secondary me-1">Collapse All</button>
        <button className="btn btn-secondary me-1">View Progress</button>
        <button className="btn btn-secondary dropdown-toggle me-1">
          <FaRegCheckCircle
            className="me-1 mb-1"
            style={{ color: "lightgreen" }}
          />
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
        <li className="list-group-item mb-5 rounded-4 d-flex flex-column">
          <h4>New Module</h4>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  name: e.target.value,
                })
              )
            }
            className="form-control mb-2"
          />
          <textarea
            value={module.description}
            onChange={(e) => {
              dispatch(
                setModule({
                  ...module,
                  description: e.target.value,
                })
              );
            }}
            className="form-control mb-2"
          />
          <div>
            <button
              onClick={() => dispatch(updateModule(module))}
              className="btn btn-primary float-end ms-1"
            >
              Update
            </button>
            <button
              onClick={handleAddModule
              }
              className="btn btn-success float-end"
            >
              Add
            </button>
          </div>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item mb-4 rounded-0 border-2 bg-body-secondary"
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
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteModule(module._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-warning ms-1"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
