import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Halloween"
        | "New_Year"
        | "Chinese_New_Year"
        | "Thanksgiving"
        | "Diwali";

    const [Holiday, setHoliday] = useState<Holiday>("Chinese_New_Year");
    const byAlphabet: Record<Holiday, Holiday> = {
        Chinese_New_Year: "Diwali",
        Diwali: "Halloween",
        Halloween: "New_Year",
        New_Year: "Thanksgiving",
        Thanksgiving: "Chinese_New_Year"
    };
    const byTime: Record<Holiday, Holiday> = {
        New_Year: "Chinese_New_Year",
        Chinese_New_Year: "Diwali",
        Diwali: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "New_Year"
    };

    function alphabetSort() {
        const alphabetical = byAlphabet[Holiday];
        setHoliday(alphabetical);
    }

    function timeSort() {
        const time = byTime[Holiday];
        setHoliday(time);
    }

    return (
        <div>
            <div>
                <Button onClick={alphabetSort}>Advance by Alphabet</Button>
                <Button onClick={timeSort}>Advance by Year</Button>
            </div>
            <div>
                {Holiday === "Halloween" ? (
                    <span>Holiday: 🎃</span>
                ) : Holiday === "New_Year" ? (
                    <span>Holiday: 🎆</span>
                ) : Holiday === "Chinese_New_Year" ? (
                    <span>Holiday: 🐲</span>
                ) : Holiday === "Thanksgiving" ? (
                    <span>Holiday: 🦃</span>
                ) : Holiday === "Diwali" ? (
                    <span>Holiday: 🏮</span>
                ) : (
                    <span>Holiday: </span>
                )}
            </div>
        </div>
    );
}
