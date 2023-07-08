import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, useTheme, useMediaQuery} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from "./components/Form/Form";
import mysticwolf from './images/mysticwolf.png';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const theme = useTheme();
    const onlySMScreen = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar sx={{
                    borderRadius: '15px',
                    m: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#66ffe6',

            }} position="static" color="transparent">
                <Typography sx={{color: '#66ffe6',}} variant="h2" align="center">Artisan Craft</Typography>
                <img src={mysticwolf} alt="mysticwolf" height="80"/>
            </AppBar>
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
        </Container>
    );
}

export default App;