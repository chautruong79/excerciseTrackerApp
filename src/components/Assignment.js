import React from "react";
import { Link } from "react-router-dom";

const Assignment = (props) => {
  let dueDate = new Date(props.date);
  let date = new Date();
  let days = Math.floor((dueDate - date) / (1000 * 60 * 60 * 24) + 1);
  console.log(props);
  return (
    <tr>
      <td>{props.no}</td>
      <td>{props.subject}</td>
      <td>{props.content}</td>
      <td>{props.note}</td>
      <td>{props.date.substring(0, 10)}</td>
      <td>{days > 0 ? days + " days" : "OVERDUE"}</td>
      <td>
        <button>
          <Link to={"/edit/" + props.id}>edit</Link>
        </button>{" "}
        |{" "}
        <button
          onClick={() => {
            props.handleDelete(props.id);
          }}
        >
          delete
        </button>
        {!props.isSaved && <span> | </span>}
        {!props.isSaved && (
          <button
            onClick={() => {
              props.handleSave(props.id);
            }}
          >
            save
          </button>
        )}
      </td>
    </tr>
  );
};

export default Assignment;
