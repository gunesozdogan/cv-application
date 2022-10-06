import Personal from "./components/Personal/Personal";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="cv-input-section">
                <Personal />
                <Experience />
                <Education />
            </div>
            <div className="cv-output-section"></div>
        </div>
    );
}

export default App;
