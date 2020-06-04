import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onChangeNote = (event) => {
    setNote(event.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const assignment = {
      subject: subject,
      content: content,
      note: note,
      date: date,
    };
    axios
      .post("http://localhost:7000/assignments/create", assignment)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Assignment</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Subject: </label>
          <input
            type="text"
            required
            className="form-control"
            value={subject}
            onChange={onChangeSubject}
          />
        </div>
        <div className="form-group">
          <label>Content: </label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <div className="form-group">
          <label>Note: </label>
          <input
            type="text"
            className="form-control"
            value={note}
            onChange={onChangeNote}
          />
        </div>
        <div className="form-group">
          <label>Due Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create New Assignment"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateAssignment;
