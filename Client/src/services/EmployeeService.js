import axios from 'axios';
import config from "../config/config";

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

    static deleteEmployeeByID(id){
        return new Promise((resolve , reject)=>{

            axios.delete(`${config.api}employees/${id}`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

}

export default EmployeeService;