import './index.css'
// {
//     word: 'a'
//     parts_of_speech: [
//         part_of_speech: 'b',
//         lemmas: [
//             word: 'c',
//             definitions: ['x', 'y', 'z']
//         ]
//     ]
// }

interface ILemma {
    word: string;
    definitions: string[]
}

export interface IPartOfSpeech {
    part_of_speech: string;
    lemmas: ILemma[]
}

export interface IWord {
    word: string
    parts_of_speech: IPartOfSpeech[]
}

export type OnClickPartOfSpeech = (partOfSpeech: IPartOfSpeech, word: IWord) => any;

const PartOfSpeech = (pos: IPartOfSpeech) => {
    return (
        <div className="part-of-speech">
            <h5>{pos.part_of_speech}</h5>
            {pos.lemmas.map(l => (
                <div>
                    form of <span style={{fontWeight: 800, color: "#474747", fontStyle: "italic"}}>{l.word}</span> | {l.definitions.join(", ")}
                </div>
            ))}
        </div>
    )
}

interface IProps {
    word: IWord;
    onClickPartOfSpeech: OnClickPartOfSpeech;
}

export const Word = (props: IProps) => {
    const { word, onClickPartOfSpeech } = props;
    return (
        <div className="word">
            <h4>{word.word}</h4>
            <div style={{marginLeft: "3rem"}}>{word.parts_of_speech.map(PartOfSpeech)}</div>
        </div>
    )
}
