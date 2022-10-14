import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>
                {answer === expectedAnswer ? (
                    <span>✔️</span>
                ) : answer !== expectedAnswer ? (
                    <span>❌</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
