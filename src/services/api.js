import { get } from 'axios'

export const api = {
    searchWord: async searched => {
        const res = await get('http://localhost:8080')
        console.log(res)
    }
}