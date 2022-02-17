import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Typography,Stack} from '@mui/material';
import Home from './home';
export default function Register() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');

    // const [registerStatus, setRegisterStatus] = useState('');
    const navigate = useNavigate()

    const register = () => {
        
        Axios.post('http://127.0.0.1:8000/api/register/', {
            username: usernameReg,
            password: passwordReg,
            email:emailReg,
           
        }).then((response) => {
            console.log(response);

            if(response.data ){
              navigate('/home')
            }
            if (response.data.message) {
            //   setRegisterStatus(response.data.message)
            // toast.success(response.data.message)
            console.log(response.data.message)
            }
           

        });
    };
  
  
    var card1style = {
        width: '300px', height: '500px',
    }
    
    return (
        <React.Fragment>
            <Stack alignItems="center" justifyContent="center" height="100vh">
            <Card style={card1style} sx={{p: 3}}>
                <CardContent>
                <Typography align = "left" variant={'h5'}>
                Registration
                    </Typography>
                  
                    <Stack spacing={2} sx={{pt: 3}} direction={'column'}>
                    <TextField
                            label="Username"
                            type="text"
                            variant="outlined"
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}/>
                    
                       <TextField
                            label="Email"
                            type="email"
                            variant="outlined"
                            onChange={(e) => {
                                setEmailReg (e.target.value);
                            }}/>
                             <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={(e) => {
                                setPasswordReg (e.target.value);
                            }}/>
                     <Button
                            variant="contained"
                            onClick={register}
                            size="large">
                            Register
                        </Button>
                        
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/login')}
                            size="large">
                            Login
                        </Button>
                          
                
                 
                    
                    </Stack>
                    {/* <h1>{registerStatus}</h1> */}
                    {/* <ToastContainer /> */}
                </CardContent>
            </Card>
            </Stack>
            <div>
                <h1>register</h1>
            </div>
        </React.Fragment>
        
    )
}