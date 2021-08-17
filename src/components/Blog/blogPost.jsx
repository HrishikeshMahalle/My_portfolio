import React from 'react'
import ReactDOM from 'react-dom';
import './blogPost.scss'
import { ThemeProvider,makeStyles } from '@material-ui/core/styles'
import { Container, Hidden } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Img1 from '../Blog/SCSS-vs-CSS.png';
import Img2 from '../Blog/Resp_SCSS.jpg';
import Img3 from '../Blog/img3.jpg';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
    blogsContainer:{
        paddingTop: theme.spacing(3)
    },
    blogTitle:{
        fontWeight:800,
        fontSize:40,
        textAlign:'center',
        paddingBottom: theme.spacing(3)
    },
    root: {
        maxWidth: 345,
    },
    card:{
        maxWidth:"100%",
    },
    media:{
        height:240,
    },
    overW:{
        overflow:'hidden',
    }
}))

export default function BlogPost() {

    const classes = useStyles();
    return (
        <div className="blog" id="blogs">
        <ThemeProvider>
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography varient = "h4" className = {classes.blogTitle}>
                Articles
            </Typography>
            <Grid className={classes.overW}>
                <Grid container spacing={3}>
                    <Grid item xs={12} ms={6} md={4} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={Img1}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    SCSS vs CSS
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Understand the War of Glory;
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button target="_blank" href="https://dev.to/hrishikeshmahalle/scss-v-s-css-who-takes-the-final-jab-3dan" size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                            </Card>
                    </Grid>
                     <Grid item xs={12} ms={6} md={4} >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={Img2}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Responsive React in 30 sec's
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Faster Done Better #SCSS
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button target="_blank" href="https://dev.to/hrishikeshmahalle/mobile-responsive-react-page-in-30-sec-s-using-scss-3lp" size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} ms={6} md={4}>
                    <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={Img3}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Empty BOX
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                               ......
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button target="_blank" href="http://www.google.com/" size="small" color="primary">
                                Learn More
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        </ThemeProvider>
        </div>
    )
}
