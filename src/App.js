import Header from "./components/Header/Header";
import Personal from "./components/input/Personal/Personal";
import Experience from "./components/input/Experience/Experience";
import Education from "./components/input/Education/Education";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="cv-input-section">
                    <Personal />
                    <Experience />
                    <Education />
                </div>
                <div className="cv-output-section"></div>
            </main>
        </div>
    );
}

export default App;
