import { Link, useParams, useLocation } from "react-router-dom";
import "../../index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item border-0 fs-5 ${pathname.includes(link) && "active-2 fw-500"}`}
          style={{color: "red"}}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
