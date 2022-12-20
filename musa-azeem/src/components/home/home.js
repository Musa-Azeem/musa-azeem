import {useState} from "react"
import homePicture from './Home_Picture.png'

function Home() {
    return (
        <>
            <div class="d-flex">
                <div class="p-2 justify-content-end">e</div> 
                <div class="p-2">e</div>
                <div class="p-2">
                    <div id="home">
                        <img src={homePicture} alt="me" height="100px"></img>
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home