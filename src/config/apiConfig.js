import axios from "axios"

//export const API_BASE_URL = "http://Localhost:5454"
export const API_BASE_URL = "https://ecommerce-backend-production-81c5.up.railway.app"

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers:{
        "Authorization": `Bearer ${jwt}`,
        "Content-Type" :"application/json"
    }
})