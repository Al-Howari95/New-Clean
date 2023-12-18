import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactUs from './ContactUs';
import axios from 'axios';

jest.mock('axios');

describe('ContactUs', () => {
  test('renders ContactUs component', () => {
    render(<ContactUs />);
    // Add more assertions as needed
  });

  test('submits the form successfully', async () => {
    // Mocking axios.post to resolve with a successful response
    axios.post.mockResolvedValue({ data: 'success' });

    render(<ContactUs />);
    
    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText('Type your message here...'), { target: { value: 'Test Message' } });

    // Submit the form
    fireEvent.click(screen.getByText('Submit'));

    // Wait for the success message or redirect
    await waitFor(() => {
      // Assuming you have a success message or redirect logic
      // Add assertions for success message or redirect
      expect(screen.getByText('Successfully')).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
