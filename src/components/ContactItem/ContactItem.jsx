import React from 'react';
import { ListItem, Button, Span, NumberSpan } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(contact.id);
  };

  return (
    <ListItem>
      <Span>{contact.name}: </Span>
      <NumberSpan>{contact.number}</NumberSpan>
      <Button onClick={handleDelete}>Delete</Button>
    </ListItem>
  );
};