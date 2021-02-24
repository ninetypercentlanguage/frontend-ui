import React, { useCallback, useEffect, useState } from 'react'
import { Search } from '../../components/search'
import { Words } from '../../components/words'
import { IPartOfSpeech, IWord } from '../../components/words/word'
import { api } from '../../services/api'
import { debouncer } from '../../utils/debounce'


export const KnownWords = () => {
    const [searchVal, setSearchVal] = useState('')
    const [words, setWords] = useState([])
    const [knownPartsOfSpeechIds, setKnownPartsOfSpeechIds] = useState([] as number[])

    useEffect(() => {
        api.getKnownPartsOfSpeech().then(setKnownPartsOfSpeechIds)
    }, [])


    const search = useCallback(debouncer(val => {
        if (val.length > 0) {
            api.searchWord(val).then(setWords).catch(console.log)
        } else {
            setWords([])
        }
    }, 200), [])

    const onSearch = useCallback(async val => {
        setSearchVal(val)
        search(val)
    }, [search, setSearchVal])

    const know = useCallback((pos: IPartOfSpeech, word: IWord) => {
        setKnownPartsOfSpeechIds(knownPartsOfSpeechIds.concat(pos.id))
        api.knowPartsOfSpeech([pos.id])
    }, [knownPartsOfSpeechIds])

    return (
        <div>
            <Search onChange={onSearch} value={searchVal} />
            <Words words={words} onClickPartOfSpeech={know} knownPartsOfSpeechIds={knownPartsOfSpeechIds} />
        </div>
    )
}