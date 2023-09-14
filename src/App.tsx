import React from 'react'
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import Menu from "./components/UI/Menu";
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";


const App = () => {


    return (
        <main className="app-block">
            <Menu/>
            <Routes>
                <Route path="/" element={<PhotoGallery/>}/>
                <Route path="/about" element={<About/>}/>
                {/*<SourceCode/>*/}
                {/*<VideoGallery/>*/}
            </Routes>
        </main>
    )
}

export default App
