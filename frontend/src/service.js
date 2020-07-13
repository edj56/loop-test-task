import axios from 'axios';

const calculate = (data) => {
    return axios.post('/calculations', data);
}


export default { calculate };