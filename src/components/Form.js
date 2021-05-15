import React from 'react'

const Form = (props) => {

    return (
        <form className='add-form' onSubmit={props.submitForm}>
            <div className='form-control'>
                <label>City</label>
                <input type='text' placeholder='Enter city' name='cityName'/>
            </div>

            <input type='submit' value='Get Weather' className='btn btn-block' />
            
        </form>
    )
}

export default Form
