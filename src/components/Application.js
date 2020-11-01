import React from "react";


import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
const {
  state,
  setDay,
  bookInterview,
  cancelAppointment
} = useApplicationData();
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  const AppointmentArr = dailyAppointments.map((appointment) => (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interviewers = {dailyInterviewers}
      interview={getInterview(state, appointment.interview)}
      bookInterview = {bookInterview}
      cancelAppointment={cancelAppointment}
    />
  ));
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {AppointmentArr}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
