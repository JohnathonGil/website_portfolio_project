import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

const Form = () => {

    const [postData, setPostData] = useState({creator:'', title:'', message:'', tags:'', selectedFile:''});

    const handleSubmit = () => {

    }

    const clear = () => {

    }
    return (
        <Paper sx={{padding: 4}}>
            <form autoComplete='off' noValidate sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',     
            }}
            onSubmit={handleSubmit}>
                <Typography variant ="h6">Creating a Post</Typography>
                <TextField name="creator" margin="dense" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/> 
                <TextField name="title" margin="dense" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" margin="dense" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" margin="dense" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                <div sx={{ 
                    width: '97%',
                    margin: '20px',
                    marginTop: '20px',
                }}><FileBase type = "file"multiple={false} onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}/></div>
                <Button sx={{  marginBottom: '10px',
                                marginTop: '10px',
                            }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;