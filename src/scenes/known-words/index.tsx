import React, { useState } from 'react'
import { Search } from './search'
import { api } from '../../services/api'
import { Words } from './words'

export const KnownWords = () => {
    const [searchVal, setSearchVal] = useState('')
    const [words, setWords] = useState([])

    const onSearch = async val => {
        setSearchVal(val)
        const res = await api.searchWord(val)
        setWords(res)
    }

    return (
        <div>
            <Search onChange={onSearch} value={searchVal} />
            <Words words={words} />
        </div>
    )
}