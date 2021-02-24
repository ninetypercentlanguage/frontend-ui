import React from 'react'
import './index.css'

interface ILemma {
    id: number;
    word: string;
    definitions: string[]
}

export interface IPartOfSpeech {
    id: number;
    part_of_speech: string;
    lemmas: ILemma[]
}

export interface IWord {
    id: number;
    word: string
    parts_of_speech: IPartOfSpeech[]
}

export type OnClickPartOfSpeech = (partOfSpeech: IPartOfSpeech, word: IWord) => any;

interface IPartOfSpeechProps {
    partOfSpeech: IPartOfSpeech;
    onClick: (pos: IPartOfSpeech) => any;
    isKnown: boolean;
}

const PartOfSpeech = (props: IPartOfSpeechProps) => {
    const { partOfSpeech, onClick, isKnown } = props
    let finalOnClick = onClick
    let classes = "part-of-speech "
    if (isKnown) {
        classes += "known"
        finalOnClick = () => {}
    }
    return (
        <div className={classes} onClick={() => finalOnClick(partOfSpeech)}>
            <h5>{partOfSpeech.part_of_speech}</h5>
            {partOfSpeech.lemmas.map(l => (
                <div key={l.id}>
                    form of <span style={{fontWeight: 800, color: "#474747", fontStyle: "italic"}}>{l.word}</span> | {l.definitions}
                </div>
            ))}
        </div>
    )
}

interface IProps {
    word: IWord;
    onClickPartOfSpeech: OnClickPartOfSpeech;
    knownPartsOfSpeechIds: number[];
}

export const Word = (props: IProps) => {
    const { word, onClickPartOfSpeech, knownPartsOfSpeechIds } = props;
    return (
        <div className="word">
            <h4>{word.word}</h4>
            <div style={{marginLeft: "3rem"}}>
                {word.parts_of_speech.map(pos => (
                    <PartOfSpeech
                        partOfSpeech={pos}
                        onClick={p => onClickPartOfSpeech(p, word)}
                        isKnown={knownPartsOfSpeechIds.includes(pos.id)}
                        key={pos.id}
                    />
                ))}
            </div>
        </div>
    )
}
