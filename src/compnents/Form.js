import React from 'react'
import '../compnents/Form.css'

function Form() {
    return (
        <div className='form-area'>
            <h2>You can contact us here!</h2>
            <form>
                <input type="name " placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea typeof='text' placeholder='Enter the text' />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Form