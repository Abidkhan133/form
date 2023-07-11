import React from 'react'

function Login() {
  
  return (

    <div className='container d-flex justify-content-center mt-4 login '>
      <form>

              <input type='number' placeholder='EnterPhoneNo'  className='m-2'/> <br />
              <input type='email' placeholder='EnterEmail' className='m-2' /> <br />
              <button className='btn btn-secondary m-2'>Login</button> <br />
            <a href='/' className='m-2'>Login with opt  or </a> <br/>
            <a href='/' className='m-2'> password</a> 
              
      
      </form>
    </div>
  )
}

export default Login