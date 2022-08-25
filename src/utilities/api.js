import axios from "axios"
const API_KEY = "?api_key=16d78b4b-b137-4077-901e-223ffe2a7355"
const API_URL = "https://project-2-api.herokuapp.com"


export const fetchVideos = () => {
    return axios.get(`${API_URL}/videos${API_KEY}`)
}

export const fetchVideoByID = (id) => {
    return axios.get(`${API_URL}/videos/${id}${API_KEY}`)
}