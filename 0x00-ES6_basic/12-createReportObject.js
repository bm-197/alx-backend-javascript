import createEmployeesObject from "./11-createEmployeesObject";

export default function createReportObject(employeesList) {
    const report = {
        allEmployees: employeesList,
        getNumberOfDepartments(employeesList) {
            return Object.keys(employeesList).length;
        }
    };
    return report;
}
