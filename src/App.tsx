import React from "react";
import "./App.css";
import { ShowHideTasks } from "./quizzer/Quizzer";
import { Quizzer } from "./quizzer/Quizzer";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Daniel Yang
            </header>
            <Quizzer></Quizzer>
            <div>
                <ShowHideTasks></ShowHideTasks>
            </div>
        </div>
    );
}

export default App;
