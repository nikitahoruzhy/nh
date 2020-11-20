import React from 'react'

export function Option(props) {
    return (
        <>
            <label htmlFor={props.name}>{props.nameRu}</label>
            <input id={props.name} type="checkbox" value={props.name}
                   onChange={(e)=>props.changeHandler(e)}/>
            <br/>
        </>
    )
}
