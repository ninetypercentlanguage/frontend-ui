import React, { useCallback, useState } from 'react'
import { Search } from '../../components/search'
import { Words } from '../../components/words'
import { api } from '../../services/api'
import { debouncer } from '../../utils/debounce'


export const KnownWords = () => {
    const [searchVal, setSearchVal] = useState('')
    const [words, setWords] = useState([])

    const hitApi = useCallback(debouncer(val => {
        setWords([])
        if (val.length > 0) {
            api.searchWord(val).then(setWords)
        }
    }, 200), [])
    const onSearch = useCallback(async val => {
        setSearchVal(val)
        hitApi(val)
    }, [hitApi, setSearchVal])

    return (
        <div>
            <Search onChange={onSearch} value={searchVal} />
            <Words words={words} onClickPartOfSpeech={(pos, word) => console.log(pos, word)} />
        </div>
    )
}