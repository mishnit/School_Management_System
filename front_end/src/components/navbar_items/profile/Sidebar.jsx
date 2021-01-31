import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Profile.scss";

function Sidebar() {
    return (
        <div className="pt-5 mt-5">
            {localStorage.getItem("role") === "4" ? (
                // For students sidebar
                <div>
                    <h5>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={["fas", "chart-line"]}
                        />{" "}
                        {"    "}
                        <Link to="/profile" style={{ color: "black" }}>
                            Dashboard
                        </Link>
                    </h5>
                    <hr />
                    <h5>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={["fas", "poll-h"]}
                        />{" "}
                        {"    "}
                        <Link to="#" style={{ color: "black" }}>
                            Marksheet
                        </Link>
                    </h5>
                    <hr />
                    <h5>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={["fas", "table"]}
                        />{" "}
                        {"    "}
                        <Link to="#" style={{ color: "black" }}>
                            Routine
                        </Link>
                    </h5>
                    <hr />
                    <h5>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={["fas", "info-circle"]}
                        />{" "}
                        {"    "}
                        <Link to="#" style={{ color: "black" }}>
                            Information
                        </Link>
                    </h5>
                </div>
            ) : (
                // for teachers sidebar
                <div>
                    <h5>
                        <Link
                            to="/profile/dashboard"
                            style={{ color: "black" }}
                        >
                            <FontAwesomeIcon
                                className="fa-icon"
                                icon={["fas", "chart-line"]}
                            />{" "}
                            {"    "}
                            Dashboard
                        </Link>
                    </h5>
                    <hr />
                    <h5>
                        <Link
                            to="/profile/myclasses"
                            style={{ color: "black" }}
                        >
                            <FontAwesomeIcon
                                className="fa-icon"
                                icon={["fas", "chalkboard"]}
                            />{" "}
                            {"    "}
                            My Classes
                        </Link>
                    </h5>
                    <hr />
                    <h5>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={["fas", "info-circle"]}
                        />{" "}
                        {"    "}
                        <Link to="#" style={{ color: "black" }}>
                            Information
                        </Link>
                    </h5>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
