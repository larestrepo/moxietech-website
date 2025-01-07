import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <ul className="item-list">
      <li className="item">
        <span className="item-title">Tranche</span>
        <span className="item-content"># of paid invoices</span>
      </li>
    </ul>
  );
};

export default Card;