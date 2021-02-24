import axios from 'axios'

const BASE = 'http://localhost:8080'
const request = async (method, url, body?) => {
    const config = { method, url: BASE + url }
    if (['post', 'put', 'patch'].includes(method)) {
        config["headers"] = { "Content-Type": "application/json" }
        config["data"] = body
    }
    return axios(config)
}

export const api = {
    searchWord: async (searched: string) => {
        const res = await request('get', `/words?string=${searched}`)
        return res.data
    },
    knowPartsOfSpeech: async (ids: number[]) => {
        await request('put', '/known-words', { ids })
    },
    getKnownPartsOfSpeech: async () => {
        const res = await request('get', `/known-words`)
        return res.data
    }
}