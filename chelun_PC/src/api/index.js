import '../mock/mock';
import axios from 'axios';
export function getCarListApi () {
    return axios.get('/getCarList').then(res=>{
        return res.data
    })
}