import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";

export default function InterviewerListItem(props) {
  const interviewerClass = classnames({"interviews__item": true, "interviews__item--selected": props.selected});
  const imageClass = classnames({"interviews__item-image": true, "interviews__item--selected-image": props.selected});

  return (
    <li className={interviewerClass} onclick={props.setInterviewer}>
      <img
        className={imageClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
