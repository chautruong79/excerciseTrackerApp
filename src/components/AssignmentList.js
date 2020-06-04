import React, { useState, useEffect } from "react";
import axios from "axios";
import Assignment from "./Assignment";

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:7000/assignments/")
      .then((res) => {
        console.log(res.data);
        setAssignments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    window.location = "/saved";
  };
  return (
    <div>
      <h3>Current Assignment</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>No</th>
            <th>Subject</th>
            <th>Content</th>
            <th>Note</th>
            <th>Due Date</th>
            <th>Due In</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
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
              isSaved={assignment.isSaved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentList;
