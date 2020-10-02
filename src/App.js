import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

//alan API key generated after integrating with alan ai software(alan studio)
const alanKey = '871bb42135775d06b86906a4b85681df2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    //initialize the alanbtn
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command})=> {
              if(command ==='testCommand'){
                  alert('This code was executed')
              }   
            }
        })
    }, [])

     return(
         <div>  
             <h1>Alan AI News Application</h1>
         </div>
     )
}

export default App