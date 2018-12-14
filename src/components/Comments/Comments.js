import React from 'react'
import Input from '../Input/Input'

function Comments (props) {
    return (
        <fieldset className="comments">
            <Input 
            htmlFor='comments'
            id='comments'
            type='text'
            name='comments'
            onBlurCapture={props.onBlurCapture}>
            Observações:
            </Input>
            
        </fieldset>
    )
}

export default Comments