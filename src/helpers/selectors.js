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
  const foundInterview = {};
  if (interview) {
    for (const interviewer in state.interviewers) {
      if (state.interviewers[interviewer].id === interview.interviewer) {
        foundInterview["student"] = interview.student;
        foundInterview["interviewer"] = state.interviewers[interviewer];
      }
    }
  } else {
    return null;
  }
  return foundInterview;
}
export function getInterviewersForDay(state, Day) {
  const days = state.days.find((dayId) => dayId.name === Day);
  if (!days) {
    return [];
  }
  const interviewers = days.interviewers.map(
    (interviewerId) => state.interviewers[interviewerId]
  );
  return interviewers;
}
