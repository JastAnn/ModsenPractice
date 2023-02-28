import {BrowserRouter, Routes, Route} from "react-router-dom";
import main from "./site/page/main";
import './css/main.css';
import './css/search.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/main" element={<main/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
