import { render, waitFor } from '@testing-library/react'
import React from 'react'

import Create from '../pages/create/Create'

describe('Edit', async() => {
    const onSubmit = jest.fn();
    
    beforeEach(() => {
        onSubmit.mockClear();
        render(<Create onSubmit={onSubmit} />);
      });

      it('onSubmit is called when all fields pass validation', async () => {
        user.type(getName(), 'Thabiso')
        user.type(getEmail(), 'Thabiso@gmail.com')
        user.type(getNumber(), '0723456788')

        user.click(screen.getByRole('button',{
            name: /edit/i
        }))

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1)
        })

        expect(onSubmit).toHaveBeenCalledWith({
            name: 'Thabiso',
            email: 'Thabiso@gmail.com',
            number: '0723456788'
        })
    })
    
    function getName() {
        return screen.getByRole('text', {
            name: /name/i
        })
    }
    
    function getEmail() {
        return screen.getByRole('text', {
            name: /email/i
        })
    }
    
    function getNumber() {
        return screen.getByRole('text', {
            name: /number/i
        })
    }
})