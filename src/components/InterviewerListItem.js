import React from 'react'
import 'components/InterviewerListItem.scss'
import classnames from "classnames"

export default function InterviewerListItem(props) {

  let InterviewerClass = classnames({ 'interviewers_item': true, "interviewers_item--selected": props.selected });
  let ImageClass = classnames({ "interviewers_item-image": true, "interviewers_item--selected-image": props.selected });

  let InterviewerSelected = props.selected;

  return (
    <li className={InterviewerClass} onClick={props.setInterviewer} >
      <img
        className={ImageClass}
        src={props.avatar}
        alt={props.name}
      />
      {InterviewerSelected && props.name}
    </li>
  );
}