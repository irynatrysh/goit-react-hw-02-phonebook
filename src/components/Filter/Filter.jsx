import { Form, Label, Input } from './Filter.styled'

export const Filter = ({ value, onChange }) => {
  return (
    <Form>
      <Label>Filter contacts by name: </Label>
      <Input type="text" value={value} onChange={onChange} />
    </Form>
  );
}