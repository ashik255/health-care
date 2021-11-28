import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";
// import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInUsingGitHub, SignInWithUserEmailAndPassword } = useAuth()
    // const { handleEmailChange, handlePasswordChange, } = useAuth()
    // const {LogOut}=useAuth()
    const history = useHistory();
    const location = useLocation();
 const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>
{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    const [userInfo, setUserInfo] = useState({});

  const handleBlur = (e) =>{
    const newUserInfo = { ...userInfo };
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  }

    const handleSignIn = (e) =>{
        e.preventDefault();
        SignInWithUserEmailAndPassword(userInfo)
        .then (result => {
          history.push(redirect_uri)
          console.log('login info',result);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
      }
    return (
        <div>
            <div className='p-2 d-flex justify-content-center '>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='' onBlur={handleBlur} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleBlur} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={handleSignIn} variant="primary" type="submit">
                        Submit
                    </Button>

                    <br />

                   
                </Form>
            </div>
            <p> New User ? <Link to="/register">Create Account</Link></p>
            <br /> 
            <button className='bg-info rounded-2 border-0 p-2' onClick={handleGoogleLogin}> Google Login</button>
            <br />
            <br />
            <button className='bg-primary rounded border-0 p-2 ' onClick={signInUsingGitHub}>GitHUb Login</button>

            {/* <button className='bg-info rounded-2 border-0 p-2 ms-3 mb-5' onClick={LogOut}>Log Out</button> */}
        </div>
    );
};

export default Login;