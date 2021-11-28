import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, signInUsingGitHub, CreateEmailAndPassword } = useAuth()

    const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';
    const [userInfo, setUserInfo] = useState({});

    const handleBlur = (e) =>{
      const newUserInfo = { ...userInfo };
      newUserInfo[e.target.name] = e.target.value;
      setUserInfo(newUserInfo);
    }
    
    const handleRegistration = (e) =>{
      e.preventDefault();
      CreateEmailAndPassword(userInfo)
      .then(result => {
        history.push(redirect_uri);
        console.log('hellooo',result.user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
    return (
        <div>
            <h2 className='bg-light m-2 p-1'>Create Account</h2>
            <br />

            <div className='p-2 d-flex justify-content-center '>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='' onBlur={handleBlur} name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleBlur} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={handleRegistration} variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            <br />
            <h2 className='dark '> Others Options You Can Try </h2>
            <button className='bg-info rounded-2 border-0 p-2' onClick={signInUsingGoogle}> Google Login</button>
            <br />
            <br />
            <button className='bg-primary rounded border-0 p-2 ' onClick={signInUsingGitHub}>GitHUb Login</button>

            
            <p>Already have an account? <Link to="/login">Login</Link></p>

        </div>
    );
};
export default Register;