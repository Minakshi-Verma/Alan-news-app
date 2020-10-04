import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards';
import useStyle from './styles'


//alan API key generated after integrating with alan ai software(alan studio)
const alanKey = '871bb42135775d06b86906a4b85681df2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const classes = useStyle()
    const [newsArticles, setNewsArticles] = useState([])
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=> {
              if(command ==='newHeadlines'){
                  setNewsArticles(articles)                  
              }   
            }
        })
    }, [])

     return(
         <div>  
           <div className={classes.logoContainer}>
               <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' className={classes.alanLogo} alt ="alan logo"/>
           </div>
             <NewsCards articles = {newsArticles}/>
         </div>
     )
}

export default App