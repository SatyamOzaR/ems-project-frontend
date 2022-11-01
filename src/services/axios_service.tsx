import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee : any){
        const headers = {
            'Content-Type': 'application/json'
          }
        return axios.post(EMPLOYEE_API_BASE_URL, employee, {headers : headers});
    }
    
    updateEmployee(employee : any, employeeId : any){
        const headers = {
            'Content-Type': 'application/json'
          }
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee, {headers : headers});
    }

    deleteEmployee(employeeId : string){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()