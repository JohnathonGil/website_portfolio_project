import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material';
import moment from 'moment';

const Post = ({ post }) => {
    return (
        <Card 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
             position: 'relative',
        }}
        >
            <CardMedia
            sx={{
                height: 0,
                paddingTop: '56.25%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',
            }}
            image={post.selectedFile} title={post.title}/>
            <div sx={{ 
                position: 'absolute', 
                top: '20px',
                left: '20px',
                color: 'white',}}
                >
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div sx={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'white',
            }}
            >
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
        </Card>
    );
}

export default Post;