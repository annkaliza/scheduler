export function getAppointmentsForDay(state, day) {
  const days = state.days.find((dayId) => dayId.name === day);
  if (!days) {
    return [];
  }
  const allAppointments = days.appointments.map(
    (appointmentsId) => state.appointments[appointmentsId]
  );
  return allAppointments;
}
export function getInterview(state, interview) {
  const interviewFound = {};
  if (interview) {
    for (let interview in state.interviewers) {
      if (state.interviewers[interview].id === interview.interviewer) {
        interviewFound["student"] = interview.student;
        interviewFound["interviewer"] = interview.interviewers[interviewer];
      }
    }
  } else {
    return null;
  }
  return interviewFound;
}
