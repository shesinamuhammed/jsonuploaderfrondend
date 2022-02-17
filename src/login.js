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
import Register from './register';
export default function Login() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const navigate = useNavigate()

    const login = () => {
        
        Axios.post('http://127.0.0.1:8000/api/login/', {
            username: usernameReg,
            password: passwordReg,
            
           
        }).then((response) => {
            console.log(response);
            console.log(response.data.token)
            
            localStorage.setItem('token',response.data.token)
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
                Login
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
                            label="Password"
                            type="password"
                            variant="outlined"
                            onChange={(e) => {
                                setPasswordReg (e.target.value);
                            }}/>
                     <Button
                            variant="contained"
                            onClick={login}
                            size="large">
                            Login
                        </Button>
                        
                        <Button
                            variant="outlined"
                            onClick={() => navigate('/')}
                            size="large">
                            Register
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