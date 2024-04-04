const scheme = 'http'
const host = 'localhost'
const port = '5000'


const baseUrl = `${scheme}://${host}:${(port)}`
export const registerUser= () => { return `${baseUrl}/register` }
export const authenticateUser = () => { return `${baseUrl}/authenticateUser`}
export const getEnergy= () => {return `${baseUrl}`} 
