import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "white",
    "black",
    "yellow"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="colorButtons"
                        name="Whats Your Favorite Color?"
                        value={color}
                        label={color}
                        onChange={updateColor}
                    />
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                Your chosen color is {color}
            </div>
        </div>
    );
}
