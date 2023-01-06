import axios from 'axios';

const apiSkills = axios.create({
    baseURL: "http://107.178.219.190:8080"
});

export default apiSkills;