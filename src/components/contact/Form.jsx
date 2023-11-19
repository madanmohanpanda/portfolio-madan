import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <span>Name</span>
            <input type="text" />
            <span>Email</span>
            <input type="text" />
            <label htmlFor="">Enter Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btn btn-primary btn-form '>Submit</button>
        </form>
       
    </div>
  )
}

export default Form