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
    it('should render alert with title', ()=>{
        const alertProps: patAlertProps={
            alertSeverity: 'warning',
            alertSize: 'sm',
        }
        const {getByTestId, getByText} = render(<Alert {...alertProps}>This is an alert with title.</Alert>);
        expect(getByTestId('alert-element')).toHaveClass('alert alert-warning alert-sm');
        expect(getByText('This is an alert with title.')).toBeInTheDocument();
    })
    it('should render alert with close button', ()=>{
        const alertProps: patAlertProps={
            alertSeverity: 'info',
            onClose: ()=>{},
        }
        const {getByTestId} = render(<Alert {...alertProps}>This is an alert with dismiss feature.</Alert>);
        expect(getByTestId('alert-element')).toHaveClass('alert alert-info');
        expect(getByTestId('dismiss-element')).toHaveClass('dismiss');
        expect(getByTestId('alert-element')).not.toHaveClass('on-close');
        fireEvent.click(getByTestId('dismiss-element'));
        expect(getByTestId('alert-element')).toHaveClass('on-close');
    })

})
