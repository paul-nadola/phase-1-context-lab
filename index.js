/* Your Code Here */
function createEmployeeRecord(employee) {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}
function createEmployeeRecords(employees) {
  return employees.map(employee => createEmployeeRecord(employee));
}
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  });
  return this;
}
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  });
  return this;
}
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(date) {
  const hours = hoursWorkedOnDate.call(this, date);
  return hours * this.payPerHour;
}
function allWagesFor() {
  const dates = this.timeInEvents.map(event => event.date);
  const wages = dates.reduce((total, date) => {
    return total + wagesEarnedOnDate.call(this, date);
  }, 0);
  return wages;
}
function findEmployeeByFirstName(employeeRecords, str) {
  let found = employeeRecords.find(record => record.firstName === str);
  return found
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, record) => {
    return total + allWagesFor.call(record);
  }, 0);
}
