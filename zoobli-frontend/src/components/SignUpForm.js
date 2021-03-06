import React from 'react';

const SignUpForm = props => {

    return (
        <form className={'signUpForm hidden'} onSubmit={props.handleSignUp}>
            <input type='text' name='first_name' placeholder='First Name'/>
            <input type='text' name='last_name' placeholder='Last Name'/>
            <input type='text' name='username' placeholder='Username'/>
            <input type='password' name='password' placeholder='Password'/>
            <input type='submit' value='Sign Up'/>
        </form>
    )

}

export default SignUpForm