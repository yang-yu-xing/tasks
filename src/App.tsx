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
                        <div className="rectangle"></div>
                        <img
                            src="https://img.freepik.com/free-vector/ramen-noodle-egg-meat-with-chopstick-cartoon_138676-2543.jpg"
                            alt="Noodles!"
                        />
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <div className="rectangle"></div>
                        <h1>Favorite Foods</h1>
                        <ul>
                            <li>Ramen</li>
                            <li>Sushi</li>
                            <li>Chicken</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
