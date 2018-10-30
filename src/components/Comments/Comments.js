import React from 'react'
import Input from '../Input/Input'

function Comments () {
    return (
        <section>
            <Input 
            htmlFor='comments'
            id='comments'
            type='text'
            name='comments'>
            Observações:
            </Input>
            
        </section>
    )
}

export default Comments