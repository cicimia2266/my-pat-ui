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