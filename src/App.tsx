import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Daniel Yang
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        <img src="./catdonut.jpg" alt="my favorite cat image" />
                    </Col>
                    <Col>
                        <h1>Favorite Foods</h1>
                        <ul>
                            <li>Ramen</li>
                            <li>Sushi</li>
                            <li>Chicken</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
