import React from 'react'
import Input from '../Input/Input'

function Comments () {
    return (
        <fieldset className="comments">
            <Input 
            htmlFor='comments'
            id='comments'
            type='text'
            name='comments'>
            Observações:
            </Input>
            
        </fieldset>
    )
}

export default Comments