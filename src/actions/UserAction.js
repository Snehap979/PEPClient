import {APIDirectory,HTTP} from '../rest'
export const checkUserExists=async()=>{
let url=APIDirectory.getUser()
console.log("url",url)
let response=await HTTP.post(url)
console.log("response",response)
return response
}



