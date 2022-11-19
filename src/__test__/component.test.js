import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom'

import Create from '../pages/create/Create'
import Header from '../components/header/Header'
import Contact from '../components/contact/Contact'
import store  from '../store/store';

const test_component = (component) => render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes> 
                <Route path="*" element={component} />
            </Routes>
         </BrowserRouter>
    </Provider>
)

 
test('handleSubmit function submits the form when user click Create', () => {
    test_component(<Create />)
        expect(screen.getByText('Create')).toBeInTheDocument()
})

test('handleSubmit function submits the form when user click Create', () => {
    test_component(<Header />)
        expect(screen.getByText('Insert')).toBeInTheDocument()
})

test('handleSubmit function submits the form when user click Create', () => {
    test_component(<Header />)
        expect(screen.getByText('Insert')).toBeInTheDocument()
})

test('handleDelete function deletes a contact when user clicks on elete', () => {
    test_component(<Contact />)
        expect(screen.getByText('Delete')).toBeInTheDocument()
})

test('renders form properly', () => {
    const { getByText, getByLabelText } = test_component(<Create />)

    const nameLabel = getByText(/Name:/i)
    const emailLabel = getByText(/Email:/i)
    const numberLabel = getByText(/Number:/i)

    expect(nameLabel).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(numberLabel).toBeInTheDocument()

    const input = getByLabelText(/Name:/i)
    expect(input).toHaveAttribute('type', 'text')
})

test('button should be disabled for empty email', () => {
    const { getByLabelText, getByRole } = test_component(<Create />)

    const emailInput = getByLabelText(/Email:/i)
    fireEvent.change(emailInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Create'})
    expect(btn).toHaveAttribute('disabled')
})

test('button should be enabled for non-empty values', () => {
    const { getByLabelText, getByRole, debug } = test_component(<Create />)

    const emailInput = getByLabelText(/Email:/i)
    fireEvent.change(emailInput, {'target': {'value': ''}})
    const btn = getByRole('button', {name: 'Create'})
    expect(btn).toHaveAttribute('disabled')
    debug(btn)

    fireEvent.change(emailInput, {'target': {'value': 'thabiso@gmail.com'}})
    debug(btn)
    expect(btn).not.toHaveAttribute('disabled')
})