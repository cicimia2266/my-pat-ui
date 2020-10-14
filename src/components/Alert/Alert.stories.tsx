import React from 'react';
import {action} from '@storybook/addon-actions';
import Alert from './Alert';

export default {
    title: 'Alert',
    component: Alert,
  };

const alertStyle: React.CSSProperties = {
    marginTop: '5px',
};

/**
 * An Alert displays a short, important message to attract the user's attention.
 *
 * ```js
 * import {Alert} from 'pat-ui'
 * ```
 */
export const DefaultAlert = () => (
    <div>
        <Alert alertSeverity={'error'} style={alertStyle}>This is a simple error alert message.</Alert>
        <Alert alertSeverity={'warning'} style={alertStyle}>This is a simple warning alert message.</Alert>
        <Alert alertSeverity={'info'} style={alertStyle}>This is a simple info alert message.</Alert>
        <Alert alertSeverity={'success'} style={alertStyle}>This is a simple success alert message.</Alert>
    </div>
);

export const DiffSizeAlert = () => (
    <div>
        <Alert alertSize='sm' style={alertStyle}>This is a SMALL info alert message.</Alert>
        <Alert style={alertStyle}>This is a DEFAULT info alert message.</Alert>
        <Alert alertSize='lg' style={alertStyle}>This is a LARGE info alert message.</Alert>
    </div>
);

export const AlertWithTitle = () => (
    <div>
        <Alert alertSeverity={'error'} alertTitle='Error' style={alertStyle}>This is an error alert message with title.</Alert>
        <Alert alertSeverity={'warning'} alertTitle='Warning' style={alertStyle}>This is a warning alert message with title.</Alert>
        <Alert alertSeverity={'info'} alertTitle='Info' style={alertStyle}>This is an info alert message with title.</Alert>
        <Alert alertSeverity={'success'} alertTitle='Success' style={alertStyle}>This is a success alert message with title.</Alert>
    </div>
);

export const AlertWithDismiss = () => (
    <div>
        <Alert alertSeverity={'error'} onClose={true} style={alertStyle}>This is an error alert message with dismiss feature.</Alert>
        <Alert alertSeverity={'warning'} onClose={true} style={alertStyle}>This is a warning alert message with dismiss feature.</Alert>
        <Alert alertSeverity={'info'} onClose={true} style={alertStyle}>This is an info alert message with dismiss feature.</Alert>
        <Alert alertSeverity={'success'} onClose={true} style={alertStyle}>This is a success alert message with dismiss feature.</Alert>
    </div>
);