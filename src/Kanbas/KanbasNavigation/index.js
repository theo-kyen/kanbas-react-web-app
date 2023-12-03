import { Link, useLocation } from "react-router-dom";
import "../index.css";
import "react-icons/fa6";
import { TfiDashboard } from "react-icons/tfi";
import {
  FaCircleUser,
  FaBook,
  FaInbox,
  FaRegCalendar,
  FaRegClock,
  FaVideo,
  FaShareFromSquare,
  FaRegCircleQuestion,
} from "react-icons/fa6";

function KanbasNavigation() {
  const links = [
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const icons = [
    <TfiDashboard style={{ color: "red" }} />,
    <FaBook style={{ color: "red" }} />,
    <FaInbox style={{ color: "red" }} />,
    <FaRegCalendar style={{ color: "red" }} />,
    <FaRegClock style={{ color: "red" }} />,
    <FaVideo style={{ color: "red" }} />,
    <FaShareFromSquare style={{ color: "red" }} />,
    <FaRegCircleQuestion style={{ color: "red" }} />,
  ];

  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 125, height: "100%" }}>
      <Link to={"/Kanbas/"}>
        <img style={{ width: 125 }} src="../images/logo.png" />
      </Link>
      <Link
        to={"/Kanbas/signin"}
        className={`list-group-item border-0 bg-black text-white text-center rounded-0 fs-5  ${
          pathname.includes("signin") && "active-1"
        }`}
      >
        Sign In
      </Link>
      <Link
        to={"/Kanbas/signup"}
        className={`list-group-item border-0 bg-black text-white text-center rounded-0 fs-5  ${
          pathname.includes("signup") && "active-1"
        }`}
      >
        Sign Up
      </Link>
      <Link
        to={"/Kanbas/account"}
        className={`list-group-item border-0 bg-black text-white text-center rounded-0 fs-5  ${
          pathname.includes("account") && "active-1"
        }`}
      >
        <FaCircleUser />
        <br />
        Account
      </Link>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item border-0 bg-black text-white text-center rounded-0 fs-5  ${
              pathname.includes(link) && "active-1"
            }`}
            style={{ height: 90 }}
          >
            {icons[index]}
            <br />
            {link}
          </Link>
        );
      })}
    </div>
  );
}
export default KanbasNavigation;
