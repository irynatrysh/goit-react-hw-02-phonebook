import React, { useState } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={(e) =>
        setName(e.target.value)}
        required />
      
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={number}
        onChange={(e) =>
        setNumber(e.target.value)}
        required />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};