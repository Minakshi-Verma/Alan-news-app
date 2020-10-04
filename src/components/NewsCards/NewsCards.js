import  React from 'react';
import {Grid, Grow, Typography} from '@material-ui/core';

import NewsCard from '../NewsCard/NewsCard'
import useStyles from './styles.js'

//Information cards to make user understand Alan Ai app work flow with examples

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles}) => {
    
    const classes= useStyles()

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems= 'stretch' spacing={3}> 
                    {infoCards.map(infoCard =>(
                        <Grid item xs={12} sm={6} md={4} lg={3}  className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                            </div>
                            {/* <InCard  infoCard = {infoCard}/> */}
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return(
        <Grow in> 
            <Grid className={classes.container} container alignItems= 'stretch' spacing={3}>
                {articles&&articles.map((article, i) =>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
                    <NewsCard article={article} i={i}/>
                </Grid>
                )}
            </Grid>          
        </Grow>
    )
} 

export default NewsCards