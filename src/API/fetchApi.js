export default class fetchApi {
   
    constructor(){
    

    }

    async getUserInfoFetch(id){
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const { data } = await response.json()
        return data
    };

    async getUserActivity(id){
        const response = await fetch(`http://localhost:3000/user/${id}/activity`)
        const { data } = await response.json()
        return data
    };

    async getUserAverage(id){
        const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        const { data } = await response.json()
        return data
    };

    async getUserPerformance(id){
        const response = await fetch(`http://localhost:3000/user/${id}/performance`)
        const { data } = await response.json()
        return data
    };


}
