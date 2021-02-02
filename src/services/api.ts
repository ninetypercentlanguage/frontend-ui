import axios from 'axios'

export const api = {
    searchWord: async (searched: string) => {
        const res = await axios.get('http://localhost:8080')
        return res.data
    }
}