import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    return (
        <div>
            <div data-testid="left-die">
                Left Die: <span>{leftDie}</span>
            </div>
            <div data-testid="right-die">
                Right Die: <span>{rightDie}</span>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={() => setLeftDie(d6)}>
                                Roll Left
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setRightDie(d6)}>
                                Roll Right
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                {leftDie === 1 && rightDie === 1 ? (
                    <span>Lose</span>
                ) : leftDie === rightDie ? (
                    <span>Win</span>
                ) : leftDie !== rightDie ? (
                    <span></span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
