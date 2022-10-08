import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

interface teamProps {
    setTeam: (newTeam: string[]) => void;
    team: string[];
    option: string;
}

interface clearProps {
    setTeam: (newTeam: string[]) => void;
}

function setOption({ setTeam, team, option }: teamProps) {
    if (!team.includes(option)) {
        setTeam([...team, option]);
    }
}

function ChooseMember({ setTeam, team, option }: teamProps) {
    return (
        <Button onClick={() => setOption({ setTeam, team, option })} size="sm">
            {option}
        </Button>
    );
}

function ClearTeam({ setTeam }: clearProps) {
    return <Button onClick={() => setTeam([])}>Clear Team</Button>;
}

export function ChooseTeam(): JSX.Element {
    const [allOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <ChooseMember
                                setTeam={setTeam}
                                team={team}
                                option={option}
                            ></ChooseMember>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <ClearTeam setTeam={setTeam}></ClearTeam>
                </Col>
            </Row>
        </div>
    );
}
