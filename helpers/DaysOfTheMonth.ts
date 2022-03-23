export default function DaysOfTheMonth(daysInMonth: number) {
  const days: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return days;
}
