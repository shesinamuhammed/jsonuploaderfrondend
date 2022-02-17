import { AppBar, Card, Container, IconButton, Paper, Toolbar , Grid } from "@mui/material";
import React, { useState } from "react";
import Logout from "./logout";
import { styled } from '@mui/material/styles';
import ReactJson from 'react-json-view'
export default function Home() {
    const axios = require('axios');
  const [fileName, setFileName] = useState("");
  const [responsedata, setResponsedata] = useState([]);
  const handleFilesChosen = async (event) => {
    setFileName(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    handleUploadClick(event);
  };
  const handleUploadClick = (event) => {
    let formData = new FormData();
    console.log(fileName);
    console.log(event.target.files[0])
   
  
    formData.append("file",  event.target.files[0]);
    axios.post('http://127.0.0.1:8000/api/load-input-data/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': "Token " + localStorage.getItem("token"),
        }
    })
   
    .then((response) => {
      
      console.log(response.data.json_data);
      setResponsedata(response.data.json_data)
    });
  };
  const Item = styled(Paper)(({ theme }) => ({ backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2, padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary, }));
  return (
    <div>
       
      
         <AppBar position="static" >
             
              <Paper>
            <Toolbar>
            <IconButton ><Logout /></IconButton></Toolbar>
      
            </Paper> </AppBar>
            <main><Grid container spacing={2}>
      <Grid item xs={8}>
        <Item> <Grid container spacing={2}>
          <input
        type="file"
        multiple={false}
        accept=".json"
        onChange={handleFilesChosen}
        
      /></Grid></Item>
      </Grid>
      
      <Grid item xs={8}>
      <ReactJson src={responsedata} />
        
      </Grid>
    </Grid>
      </main>
     
      
       <div>
        
        </div>
    </div>
   
  );
}
