import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Axios from "axios";

import Button from '@mui/material/Button';

export default function Logout() {

 

    const navigate = useNavigate()

    const logout = () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Token '   + localStorage.getItem('token')
          }
          
         
        Axios.post('http://127.0.0.1:8000/api/logout/',{}, {
            headers: headers//the token is a variable which holds the token
            }).then((response) => {
            console.log(response);
            localStorage.clear();
            
              navigate('/login')
           
           
           

        });
    };
  
  
    
    return (
        <React.Fragment>
        
                     <Button
                            variant="contained"
                            onClick={logout}
                            size="large">
                            Logout
                        </Button>
                        
                        
                          
                
                 
                  
        </React.Fragment>
        
    )
}