import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");
  const [error, setError] = useState("");
  function save(){
    if(name === ""){
      setError("name can not be empty");
      return;
    }
    if (!interviewer){
      setError("Choose an interviewer");
      return;

    }
    setError("");
    props.onSave(name, interviewer);
  }
  function reset (){
    setName("");
    setInterviewer(null);
  }

  function cancel(){
  reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit ={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={name ? name : ""}
            placeholder="Enter Student Name"
            onChange={(event) => {
              setName(event.target.name);
            }}
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger>{cancel}</Button>
          <Button confirm>{save}</Button>
        </section>
      </section>
    </main>
  );
}
