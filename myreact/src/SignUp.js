import React, { useState } from 'react'

function SignUp() {
  const[show ,setshow]=useState(true)
  return (
    <div className='container d-flex justify-content-center mt-4 signup'>
        <form>
          <input type='text' placeholder='Firstname'/> <br/>
          <input type='text' placeholder='lastname'/> <br/>
          <input type='number' placeholder='EnterPhoneNo'/> <br/>
          <input type='email' placeholder='EnterEmail'/> <br/>

        {
          show === true ? 
          <>         
           <input type='text' placeholder='city'/> <br/>
          <input type='text' placeholder='address'/> <br/>
          <input type='text' placeholder='pincode'/><br/>
          <input type='text' placeholder='state'/><br/>
          <button className='btn btn-secondary' onClick={()=>setshow(false)}>Submit</button> <br/>
          <input type='checkbox'/> 
          <span>Agree with terms and conditions</span> 
          </>
            : ""
        }
        </form>
    </div>
  )
}

export default SignUp