import axios from "axios";

export const api = axios.create({
    baseURL:"http://107.178.219.190:8080"
    });
    
export const createSession = async(login, password) =>{
    return api.post('/api/login', {login, password});
}

// export const createSession = async(login, password) =>{
//     return api
//     .get(
//         `http://107.178.219.190:8080/api/users?login=${login}&password=${password}`
//         )
//     .catch((error) => {
//         alert('Usuario ou senha inválidos');
//         })
// }

