import { Word, IWord, OnClickPartOfSpeech } from './word'
import './index.css'

interface IProps {
    words: IWord[]
    onClickPartOfSpeech: OnClickPartOfSpeech;
}

export const Words = (props: IProps) => {
    const { words, onClickPartOfSpeech } = props
    return (
        <div className="words">
            {props.words.length > 0 ? props.words.map(word => <Word word={word} onClickPartOfSpeech={onClickPartOfSpeech}/>) : "no words found"}
        </div>
    )
}