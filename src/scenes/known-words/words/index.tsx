import { stringify } from 'querystring'
import React from 'react'
import { Interface } from 'readline'

interface ILemma {
    word: string;
    definitions: string[]
}

interface IPartOfSpeech {
    part_of_speech: string;
    lemmas: ILemma[]
}

interface IWord {
    word: string
    parts_of_speech: IPartOfSpeech[]
}

interface IProps {
    words: IWord[]
}

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

const PartOfSpeech = (pos: IPartOfSpeech) => {
    return (
        <div>
            <h5>{pos.part_of_speech}</h5>
            {pos.lemmas.map(l => (
                <div>
                    form of <span style={{fontWeight: 800, color: "#474747", fontStyle: "italic"}}>{l.word}</span> | {l.definitions.join(", ")}
                </div>
            ))}
        </div>
    )
}

const Word = (word: IWord) => {
    return (
        <div style={{marginLeft: "1rem"}}>
            <h4>{word.word}</h4>
            <div style={{marginLeft: "3rem"}}>{word.parts_of_speech.map(PartOfSpeech)}</div>
        </div>
    )
}

export const Words = (props: IProps) => {
    return (
        <div>
            {props.words.map(Word)}
        </div>
    )
}