import React, { useState } from 'react'

export const Search = props => {
    return (
        <div>
            <input type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
        </div>
    )
}