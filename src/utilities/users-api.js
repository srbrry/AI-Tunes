import { getToken } from "./users-service"
const BASE_URL = "/api/users"

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)

}

export async function logIn(credentials) {
    return sendRequest(`${BASE_URL}/log-in`, 'POST', credentials)

}

//update player score
export async function updateScore(user){
    return sendRequest(`${BASE_URL}/score`,'PATCH', user)
}

// finding all users in database
export async function getAllUsers(){
    return sendRequest(`${BASE_URL}/homepage`, 'GET')
}

export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    
    if(payload) {
        options.headers = { 'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}

export async function checkToken() {
    return sendRequest(BASE_URL + '/check-token')
}