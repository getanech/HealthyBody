import axios from "axios"

const userRequests = {
    login: async(data) => {
        const response = await axios.post(
            "http://localhost:5000",
            data
        )
        return response
    }
}
export default userRequests