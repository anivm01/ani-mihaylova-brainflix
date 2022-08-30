import axios from "axios"

export const fetchVideos = () => {
    return axios.get(`http://localhost:8000/videos/`)
}

export const fetchVideoByID = (id) => {
    return axios.get(`http://localhost:8000/videos/${id}`)
}