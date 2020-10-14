import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Alert, {patAlertProps} from './Alert';

describe('Alert', ()=>{
    it('should render default alert', ()=>{
        const alertProps: patAlertProps={
            
        }
        const {getByTestId} = render(<Alert {...alertProps}>This is a default info alert</Alert>);
        expect(getByTestId('alert-element')).toHaveClass('alert alert-info');
        expect(getByTestId('alert-element')).not.toHaveClass('alert-lg');
    });
    it('should render large error alert', ()=>{
        const alertProps: patAlertProps={
            alertSeverity: 'error',
            alertSize: 'lg'
        }
        const {getByTestId} = render(<Alert {...alertProps}>This is a large error alert</Alert>);
        expect(getByTestId('alert-element')).toHaveClass('alert alert-error alert-lg');
        expect(getByTestId('alert-element')).not.toHaveClass('alert-sm');
    })
})
