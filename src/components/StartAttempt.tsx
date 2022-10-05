import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setNumAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz() {
        setProgress(true);
        setNumAttempts(attempts - 1);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={progress === true || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={progress === false}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setNumAttempts(attempts + 1)}
                    disabled={progress === true}
                >
                    Mulligan
                </Button>
            </div>
            <div>
                <span>{attempts}</span>
            </div>
        </div>
    );
}
