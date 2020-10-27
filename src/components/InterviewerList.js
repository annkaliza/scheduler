import React from "react";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {

  const interviewerArray = props.interviewers.map((interviewer) =>{
    <InterviewerListItem key ={interviewer.id} name = {interviewer.name} selected = {interviewer.id === props.value} setInterviewer = {(e) +> props.onChange(interviewer.id)}/>

  });
  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewerArray}</ul>
  </section>
  );
}
