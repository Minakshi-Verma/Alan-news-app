import React, {useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards';


//alan API key generated after integrating with alan ai software(alan studio)
const alanKey = '871bb42135775d06b86906a4b85681df2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles] = useState("")

    //initialize the alanbtn
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles})=> {
              if(command ==='newHeadlines'){
                  setNewsArticles(newsArticles)                  
              }   
            }
        })
    }, [])

     return(
         <div>  
             <h1>Alan AI News Application</h1>
             <NewsCards articles = {articles}/>
         </div>
     )
}

export default App