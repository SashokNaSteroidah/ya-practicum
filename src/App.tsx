import React from 'react'
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import Menu from "./components/UI/Menu";


function App() {


    return (
        <main className="app-block">
            <Menu />
            <PhotoGallery/>
            {/*<About/>*/}
            {/*<SourceCode/>*/}
            {/*<VideoGallary/>*/}
        </main>
    )
}

export default App
