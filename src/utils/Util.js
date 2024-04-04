export const getDeviceIds=(value)=>{
    if(value=='solar')
    {
        return 2
    }
    if(value=='hydro')
    {
        return 1
    }
    if(value=='wind')
    {
        return 0
    }
}


export const formGeneratedJson=(device,data)=>
{
    console.log("data",data)
const convertedData = data.map(item => ({
    value: item.value.N,
    time: item.time.S
}));
let object={
    [device]:convertedData
}
return object
}

