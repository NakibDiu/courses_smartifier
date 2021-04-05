import React from 'react';
import {Typography, Avatar, Button, CssBaseline, Card, CardContent,CardMedia, Container, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import useStyle from './Styles';
var data = require("./data.json");

const App = () => {
    const classes = useStyle();
    let number = 0;
    return (
        <>
            <CssBaseline />
            <Container className = {classes.headerContainer}>
                <Typography variant = "h5" className = {classes.headertitle}>
                    Tailor Made courses for you
                </Typography>
                <Typography variant = "h6"  className = {classes.headertitle}>
                    Lorem ipsum dolor sit amet.
                </Typography>
            </Container>
            <Container position = "relative" maxWidth = "xl" className = {classes.container}>
                <Grid container className = {classes.courseContainer}>
                {data.map((data) => (
                    <Grid item className = {classes.course}>
                        <Card className = {classes.card}>
                            <CardMedia className = {classes.image}>
                                <Avatar src = {data.image} variant = "square" className = {classes.avatar} />
                            </CardMedia>
                            <CardContent className = {classes.cardContent}>
                                <Typography variant = "h4"  className = {classes.courseTitle} paragraph>
                                    {data.title}
                                </Typography>
                                <Typography variant = "h5"  className = {classes.description}>
                                    {data.description}
                                </Typography>
                                <List className = {classes.list}>
                                    <ListItem className = {classes.listitem}>
                                        <CheckIcon fontSize = "small" className = {classes.listIcon}/>
                                        <ListItemText primary = {data.list1} className = {classes.listtext} />
                                    </ListItem>
                                    <ListItem className = {classes.listitem}>
                                        <CheckIcon fontSize = "small" className = {classes.listIcon} />
                                        <ListItemText primary = {data.list2} className = {classes.listtext} />
                                    </ListItem>
                                    <ListItem className = {classes.listitem}>
                                        <CheckIcon fontSize = "small" className = {classes.listIcon} />
                                        <ListItemText primary = {data.list3} className = {classes.listtext} />
                                    </ListItem>
                                </List>
                                <Button variant = "contained" size = "medium" color = "primary" className = {classes.courseButton} >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                        {number === 1? 
                        <Button variant = "contained" size = "medium" color = "primary" className = {classes.bookingButton} >
                        Email us, we will be happy to discuss
                        </Button> : null                   
                    }
                    {number++}
                    </Grid>
                ))}
                
                </Grid>
                <Button variant = "contained" size = "medium" color = "primary" className = {classes.bookingButton} >
                    Book a call with us, we would love to know your plans
                </Button>
            </Container>
            
        </>
    )
}
    

export default App;