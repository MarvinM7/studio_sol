import { fireEvent, render, screen } from '@testing-library/react';
import Index from '.';

describe("<Index />", () => {
  it('should be in the document', () => {
    render(<Index />);
  
    expect(screen.getByText(/QUAL É O NÚMERO?/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite o palpite/i)).toBeInTheDocument();
    expect(screen.getByTestId(/sendButton/i)).toBeInTheDocument();
  }); 
  
  it('should not allow letters to be inputted', () => {
    render(<Index />);
  
    const input = screen.getByPlaceholderText(/Digite o palpite/i);
  
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: 'T'}});
    fireEvent.change(input, {target: {value: `${input.value}1`}});
    fireEvent.change(input, {target: {value: `${input.value}T`}});
    fireEvent.change(input, {target: {value: `${input.value}2`}});
    expect(input.value).toBe('12');
  });
  
  it('should allow numbers to be inputted', () => {
    render(<Index />);
  
    const input = screen.getByPlaceholderText(/Digite o palpite/i);
  
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: '123'}});
    expect(input.value).toBe('123');
  });
  
  it('should allow the input value to be deleted', () => {
    render(<Index />);
  
    const input = screen.getByPlaceholderText(/Digite o palpite/i);
  
    fireEvent.change(input, {target: {value: '123'}});
    expect(input.value).toBe('123');
    fireEvent.change(input, {target: {value: ''}});
    expect(input.value).toBe('');
  });
  
  it('should not allow start with more than one 0', () => {
    render(<Index />);
  
    const input = screen.getByPlaceholderText(/Digite o palpite/i);
  
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: '0'}});
    fireEvent.change(input, {target: {value: `${input.value}0`}});
    expect(input.value).toBe('0');
  });
  
  it('should not allow value with more than 3 digits', () => {
    render(<Index />);
  
    const input = screen.getByPlaceholderText(/Digite o palpite/i);
  
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: '1'}});
    fireEvent.change(input, {target: {value: `${input.value}2`}});
    fireEvent.change(input, {target: {value: `${input.value}3`}});
    fireEvent.change(input, {target: {value: `${input.value}4`}});
    expect(input.value).toBe('123');
  });
});