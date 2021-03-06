import axios from 'axios';
import config from "../config/config";
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;

class EmployeeService {

    constructor () {

    }

     static getAllEmployees(){
        return new Promise((resolve , reject)=>{

            axios.get(`${config.api}employees/`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static getEmployeeByID(id){
        return new Promise((resolve , reject)=>{

            axios.get(`${config.api}employees/${id}`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static deleteEmployeeByID(id){
        return new Promise((resolve , reject)=>{

            axios.delete(`${config.api}employees/${id}`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static insertEmployee(employee){
        return new Promise((resolve , reject)=>{

            axios.post(`${config.api}employees/`,employee).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static updateEmployee(id,employee){
        return new Promise((resolve , reject)=>{

            axios.put(`${config.api}employees/${id}`,employee).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

}

export default EmployeeService;