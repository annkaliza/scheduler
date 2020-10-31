export function  getAppointmentsForDay(state, day) {
  const days = state.days.find((dayId) => dayId.name === day);
  if (!days) {
    return [];
  }
  const allAppointments = days.appointments.map(
    (appointmentsId) => state.appointments[appointmentsId]
  );
  return allAppointments;
}
