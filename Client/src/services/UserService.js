import axios from 'axios';
import config from "../config/config";
const token = JSON.parse(localStorage.getItem('token'));
axios.defaults.headers.common['Authorization'] = token;


class UserService {

    constructor () {

    }


     static getAllUsers(){
        return new Promise((resolve , reject)=>{

            axios.get(`${config.api}user/`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            }); 
        });
    }

    static getUserByID(id){
        return new Promise((resolve , reject)=>{

            axios.get(`${config.api}user/${id}`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static login(user){
        return new Promise((resolve , reject)=>{

            axios.post(`${config.api}user/login`,user).then((data)=>{
                
                let user = {
                    id      :data.data.user.id,
                    role    :data.data.user.role,
                    username:data.data.user.username,
                }

                let token = data.data.token;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', JSON.stringify(token));

                resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static logout(){
        // return new Promise((resolve , reject)=>{

        //     // axios.get(`${config.api}user/logout`).then((data)=>{

        //     //     localStorage.removeItem('user');
        //     //     localStorage.removeItem('token');

        //     //     resolve(data.data);
            
        //     // }).catch((error)=>{

        //     //     reject (error)
        //     // });
        // });

            localStorage.removeItem('user');
            localStorage.removeItem('token');
  
        
    }
  
    static deleteUserByID(id){
        return new Promise((resolve , reject)=>{

            axios.delete(`${config.api}user/${id}`).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static insertUser(user){
        return new Promise((resolve , reject)=>{

            axios.post(`${config.api}user/`,user).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static updateUser(id,user){
        return new Promise((resolve , reject)=>{

            axios.put(`${config.api}user/${id}`,user).then((data)=>{
                
                 resolve(data.data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    static getAllSuppliers(){
        return new Promise((resolve,reject)=>{
            axios.get('http://localhost:5000/suppliers').then((data)=>{
                resolve(data);
            });
        });
    }

}

export default UserService;