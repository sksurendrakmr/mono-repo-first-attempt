import React from 'react'
import Button from './Button'

import { render } from '@testing-library/react'

test('should first', () => {
    render(<Button label='Sample Button' />)
})