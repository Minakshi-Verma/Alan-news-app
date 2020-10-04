import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import useStyle from './styles'


//alan API key generated after integrating with alan ai software(alan studio)
const alanKey = '871bb42135775d06b86906a4b85681df2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const classes = useStyle()
    
    //state for all the articles from APTI and activeArticle
    const [newsArticles, setNewsArticles] = useState([])
    //We are starting from index 0 since this would be the index he would be currently reading
    const [activeArticle, setActiveArticle] = useState(0)
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=> {
              if(command ==='newHeadlines'){
                  setNewsArticles(articles)                  
              }  
              else if(command==='highlight') {
                  //We will change the state based on previous state
                  //we set it by calling a callback that takes prevstate and gives the new one
                  //React recommends, if you are changing the state based on prev state, you call it as a  callback fx
                setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1)
              }
            }
        })
    }, [])

     return(
         <div>  
           <div className={classes.logoContainer}>
               <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' className={classes.alanLogo} alt ="alan logo"/>
           </div>
             <NewsCards articles = {newsArticles} activeArticle={activeArticle}/>
         </div>
     )
}

export default App