import {APIDirectory,HTTP} from '../rest'


export const signUpUser=async(user)=>{
    try
    {
        let url=APIDirectory.registerUser(user)
let response=await HTTP.post(url,user)
return response
    }
    catch(error)
    {
        return 400
        // console.log("error",error)
        // throw "400"
    }

}



export const authenticateUser=async(user)=>{
    let url=APIDirectory.authenticateUser(user)
    let response=await HTTP.post(url,user)
    return response
    }
    
export const getEnergy=async(deviceId,startTime,endTime)=>{
    let url=APIDirectory.getEnergy()
   
    const queryString = `/data?deviceId=${deviceId}&startTime=${startTime}&endTime=${endTime}`;
    url = url + queryString;  
    console.log("url",url)
    let response=await HTTP.get(url)
    console.log("response",response)
    if(response && response.status==200)
    {
        return response.data
    }
    
    }




