import React from 'react';
import { Card, Badge } from "react-bootstrap";
import '../Styles/suggestionCard.css';
import ArrowTop from '../Assets/arrow-top.svg';
import CommentIcon from '../Assets/comment-icon.svg';

function suggestionCard({ upvotes, title, description, category }) {
  return (
    <Card className='suggestion-card'>
      <Card.Body>
        <div className='suggestion-votes'>
          <img src={ArrowTop} alt='Arrow Icon' />
          <span>{upvotes}</span>
        </div>
        <div className='suggestion-content'>
          <h2>{title}</h2>
          <p>{description}</p>
          <Badge bg="primary">{category}</Badge>
        </div>
        <div className='suggestion-comments'>
          <img src={CommentIcon} alt='Comment Icon' />
          <span>2</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default suggestionCard