import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, useTheme, useMediaQuery} from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const theme = useTheme();
    const onlySMScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grow in>
            <Container>
                <Grid container sx={{flexDirection: onlySMScreen ? 'column-reverse' : 'inherit'}} justify= "space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home