import React from 'react';
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import { SuggestionList } from "../helpers/SuggestionList";
import SuggestionCard from '../components/suggestionCard';
import '../Styles/suggestions.css'
import Bulb from '../Assets/bulb.svg';

function suggestions() {
  return (
    <Container className="suggestion-wrapper">
      <Row>
        <Col>
          <Card className="gradient-bg feedbackBoard">
            <Card.Body>
              <Card.Title>Frontend Mentor</Card.Title>
              <Card.Text>Feedback Board</Card.Text>
            </Card.Body>
          </Card>
          <Card className="suggestion-filters">
            <Card.Body>
              <Button>All</Button>
              <Button>UI</Button>
              <Button>UX</Button>
              <Button>Enhancement</Button>
              <Button>Bug</Button>
              <Button>Feature</Button>
            </Card.Body>
          </Card>
          <Card className="suggestion-roadmap">
            <Card.Body>
              <Card.Title>Roadmap</Card.Title>
              <ul>
                <li>
                  Planned <span>2</span>
                </li>
                <li>
                  In-Progress <span>3</span>
                </li>
                <li>
                  Live <span>1</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div className="suggestions-block">
            <img src={Bulb} alt='Bulb' />
            <h5>6 Suggestions</h5>
            <div className="suggestions-dropdown">
              <span>Sort by: </span>
              <Dropdown>
                <Dropdown.Toggle id="suggestions-dropdown">
                  Most Upvotes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Most Upvotes</Dropdown.Item>
                  <Dropdown.Item href="#">Least Upvotes</Dropdown.Item>
                  <Dropdown.Item href="#">Most Comments</Dropdown.Item>
                  <Dropdown.Item href="#">Least Comments</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Button variant="primary">+ Add Feedback</Button>
          </div>

          {SuggestionList.map((suggestionItem) => {
            return (
              <SuggestionCard
                upvotes={suggestionItem.upvotes}
                title={suggestionItem.title}
                description={suggestionItem.description}
                category={suggestionItem.category}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default suggestions