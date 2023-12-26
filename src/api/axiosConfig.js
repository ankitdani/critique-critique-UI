import axios from "axios";

export default axios.create({
    //change base url after using ngrok on port localhost 8080
    baseURL: 'https://b695-2601-647-4d7f-a7d0-4c7-fa2a-d80d-214d.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning" : "true"}
});