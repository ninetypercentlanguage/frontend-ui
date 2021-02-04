import axios from 'axios'

const BASE = 'http://localhost:8080'
const get = url => axios.get(`${BASE}${url}`)

export const api = {
    searchWord: async (searched: string) => {
        const res = await get(`/words?string=${searched}`)
        return res.data
    }
}