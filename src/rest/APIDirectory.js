

const scheme = 'http'
const host = 'localhost'
const port = '5000'


const baseUrl = `${scheme}://${host}:${(port)}`
export const getUser = () => { return `${baseUrl}/register` }
export const registerUser = () => { return `${baseUrl}/clients` }
export const getEnergyData= () => {return `${baseUrl}/energy/}`} 
