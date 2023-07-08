import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {

    const [postData, setPostData] = useState({creator:'', title:'', message:'', tags:'', selectedFile:''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''});
    }
    return (
        <Paper sx={{padding: 4}}>
            <form autoComplete='off' noValidate sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',     
            }}
            onSubmit={handleSubmit}>
                <Typography variant ="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
                <TextField name="creator" margin="dense" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/> 
                <TextField name="title" margin="dense" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="message" margin="dense" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                <TextField name="tags" margin="dense" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",")})}/>
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