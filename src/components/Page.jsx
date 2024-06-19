import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"

import Page6 from "./Page6"
import Playlist from "./Playlist"
import './App.css';


const Page = () => {
    return (
        <div >

            <div className="conteiner">
                <Playlist/>
            </div>
            
                    <div className='container'>
                        <Page1/>
                    </div>
            
                    <div className='container'>
                        <Page2/>
                    </div>

                    <div className='container'>
                        <Page3/>
                    </div>
                
     
                
                    <div className='container'>
                        <Page4/>
                    </div>
                
            

  
            
                    <div className='container'>
                        <Page6/>
                    </div>
                                

        </div>
        )
    }


export default Page