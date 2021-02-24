import { Word, IWord, OnClickPartOfSpeech } from './word'
import './index.css'

interface IProps {
    words: IWord[]
    onClickPartOfSpeech: OnClickPartOfSpeech;
    knownPartsOfSpeechIds: number[];
}

export const Words = (props: IProps) => {
    const { words, onClickPartOfSpeech, knownPartsOfSpeechIds } = props
    return (
        <div className="words">
            {words.length > 0
                ? words.map(word => (
                    <Word word={word} onClickPartOfSpeech={onClickPartOfSpeech} key={word.id} knownPartsOfSpeechIds={knownPartsOfSpeechIds} />
                ))
                : "no words found"}
        </div>
    )
}