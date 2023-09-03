import axios from "axios";

export default axios.create({
    baseURL: 'https://7c84-2601-647-5f83-e2f0-d4c9-a268-6298-b081.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning" : "true"}
});