import React, { useState } from 'react'

function TranslateForm(props) {

    const [input, setInput] = useState('');

    const character = props.title.split(' ');

    const handleChange = e =>{

        e.preventDefault();
        setInput(e.target.value);
        console.log(e)
    }

    const handleSubmit = e =>{

        e.preventDefault();
        props.onSubmit({

            text: input
        })
        setInput('');
    }

    return (
        <form className="translate-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add text to translate"
                value={input}
                name="text"
                className="translate-input"
                onChange={handleChange}
            />
            <button className="translate-button"> Talk like a {character[character.length-1]}</button>
        </form>
    )
}

export default TranslateForm
