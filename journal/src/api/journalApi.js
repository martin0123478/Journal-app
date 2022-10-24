import axios from "axios";

const journalApi = axios.create({
    baseURL:'https://vue-demo-32a6f-default-rtdb.firebaseio.com'
})

export default journalApi