import axios from "axios";

export default axios.create({
    //change base url after using ngrok on port localhost 8080
    baseURL: 'https://e1ea-2601-647-4d7f-a7d0-4c19-abee-cf48-5f44.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning" : "true"}
});