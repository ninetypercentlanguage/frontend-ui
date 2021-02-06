import React from 'react'

interface IProps {
    value: string;
    onChange: (val: string) => any;
    debounce?: boolean;
}

export const Search = (props: IProps) => {
    return (
        <div>
            <input type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
        </div>
    )
}