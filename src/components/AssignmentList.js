import React, { useState, useEffect } from "react";
import axios from "axios";
import Assignment from "./Assignment";

const AssignmentList = (props) => {
  const [assignments, setAssignments] = useState([]);
  const path = props.match.path;
  useEffect(() => {
    axios
      .get("http://localhost:7000/assignments/")
      .then((res) => {
        if (path === "/saved") {
          setAssignments(res.data.filter((assignment) => assignment.isSaved));
        } else {
          setAssignments(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path]);

  const handleDelete = (id) => {
    axios.delete("http://localhost:7000/assignments/" + id).then((res) => {
      console.log(res.data);
    });
    setAssignments((prevValue) =>
      prevValue.filter((assignment) => assignment._id !== id)
    );
  };

  const handleSave = (id) => {
    axios
      .patch("http://localhost:7000/assignments/edit/" + id, { isSaved: true })
      .then((res) => console.log(res.data));
    // @ts-ignore
    window.location = "/saved";
    console.log("click");
  };

  const handleEdit = (id) => {
    window.location = "/edit/" + id;
  };
  return (
    <div>
      <p className="heading">
        {path === "/saved" ? "Saved" : "Current"} Assignments
      </p>
      <div className="main">
        {assignments.map((assignment, ind) => (
          <Assignment
            key={assignment._id}
            id={assignment._id}
            no={ind + 1}
            subject={assignment.subject}
            content={assignment.content}
            date={assignment.date}
            note={assignment.note}
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleEdit={handleEdit}
            isSaved={assignment.isSaved}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;
