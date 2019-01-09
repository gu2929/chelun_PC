import {getCarListApi} from '../../api/index'
let state={
    CarArr:[]
}
let arr=[]
let mutations={
     getCarListStore (state,payload) {
        getCarListApi().then(res=>{
             state.CarArr=res.attention_chart;
             for(var i in state.CarArr){
                arr.push({
                    name: i,
                    type: 'line',
                    data: Object.values(state.CarArr[i])
                })
            }
            state.CarArr=arr;
        });  
    }
}
export default {
    namespaced:true,
    state,
    mutations
}