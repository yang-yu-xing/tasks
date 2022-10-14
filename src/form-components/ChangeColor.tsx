import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>();

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
        </div>
    );
}
