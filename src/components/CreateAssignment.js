import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = (props) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date());

  const id = props.match.params.id;

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:7000/assignments/" + id)
        .then((res) => {
          setSubject(res.data.subject);
          setContent(res.data.content);
          setNote(res.data.note);
          setDate(new Date(res.data.date));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [id]);

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

  const onSubmit = () => {
    const assignment = {
      subject: subject,
      content: content,
      note: note,
      date: date,
    };
    if (!id) {
      axios
        .post("http://localhost:7000/assignments/create", assignment)
        .then((res) => console.log(res.data));
    } else {
      axios.patch("http://localhost:7000/assignments/edit/" + id, assignment);
    }
    // @ts-ignore
    window.location = "/";
  };
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="create" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">
              {id ? "Edit Assignment" : "New Assignment"}
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="subject">
                Subject
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="subject"
                id="subject"
                autofocus="autofocus"
                required
                value={subject}
                onChange={onChangeSubject}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="content">
                Content
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="content"
                id="content"
                required
                value={content}
                onChange={onChangeContent}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="note">
                Note
              </label>
              <textarea
                name="note"
                value={note}
                onChange={onChangeNote}
                rows="4"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                placeholder="Enter text here..."
              ></textarea>
            </div>
            <div className="form-group db fw6 lh-copy f6 mt3 ">
              <label>Due Date: </label>
              <div>
                <DatePicker selected={date} onChange={onChangeDate} />
              </div>
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmit}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value={id ? "Edit" : "Create"}
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default CreateAssignment;
