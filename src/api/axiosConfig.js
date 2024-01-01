import axios from "axios";

export default axios.create({
    //change base url after using ngrok on port localhost 8080
    baseURL: 'https://7c92-2601-647-4d7f-a7d0-98b6-ca1c-4882-9381.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning" : "true"}
});