import PhotoGallery from "./components/photoGallery/PhotoGallery";
import Menu from "./components/UI/menu/Menu";
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import SourceCode from "./components/SourceCode/SourceCode";
import VideoGallery from "./components/VideoGallery/VideoGallery";


const App = () => {


    return (
        <main className="app-block">
            <Menu/>
            <div className="main-block">
                <Routes>
                    <Route path="/" element={<PhotoGallery/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/source" element={<SourceCode/>}/>
                    <Route path="/screen-cast" element={<VideoGallery/>}/>
                </Routes>
            </div>
        </main>
    )
}

export default App
