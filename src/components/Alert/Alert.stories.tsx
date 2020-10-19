import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';
import Icon from '../Icon';
import AlertTitle from './AlertTitle';
import Button from '../Button';
import './AlertCustomCss.scss';

export default {
  title: 'Alert',
  component: Alert,
};

const alertStyle: React.CSSProperties = {
  marginTop: '5px',
};

export const DefaultAlert = () => (
  <div>
    <Alert alertSeverity={'error'} style={alertStyle}>
      This is a simple error alert message.
    </Alert>
    <Alert alertSeverity={'warning'} style={alertStyle}>
      This is a simple warning alert message.
    </Alert>
    <Alert alertSeverity={'info'} style={alertStyle}>
      This is a simple info alert message.
    </Alert>
    <Alert alertSeverity={'success'} style={alertStyle}>
      This is a simple success alert message.
    </Alert>
  </div>
);

export const DiffSizeAlert = () => (
  <div>
    <Alert alertSize="sm" style={alertStyle}>
      This is a SMALL info alert message.
    </Alert>
    <Alert style={alertStyle}>This is a DEFAULT info alert message.</Alert>
    <Alert alertSize="lg" style={alertStyle}>
      This is a LARGE info alert message.
    </Alert>
  </div>
);

export const AlertWithTitle = () => (
  <div>
    <Alert alertSeverity={'error'} style={alertStyle}>
      <AlertTitle alertTitleType={'bold'}>BOLD Error</AlertTitle>
      This is an error alert message with title.
    </Alert>
    <Alert alertSeverity={'warning'} style={alertStyle}>
      <AlertTitle>REGULAR Warning</AlertTitle>
      This is a warning alert message with title.
    </Alert>
    <Alert alertSeverity={'info'} style={alertStyle}>
      <AlertTitle alertTitleType={'italic'}>ITALIC Info</AlertTitle>
      This is an info alert message with title.
    </Alert>
    <Alert alertSeverity={'success'} style={alertStyle}>
      <AlertTitle style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
        CUSTOMIZED Success
      </AlertTitle>
      This is a success alert message with title.
    </Alert>
  </div>
);

export const AlertWithDismiss = () => (
  <div>
    <Alert alertSeverity={'error'} onClose={action('Error Alert closed.')} style={alertStyle}>
      This is an error alert message with dismiss feature.
    </Alert>
    <Alert alertSeverity={'warning'} onClose={action('Warning Alert closed.')} style={alertStyle}>
      This is a warning alert message with dismiss feature.
    </Alert>
    <Alert alertSeverity={'info'} onClose={action('Info Alert closed.')} style={alertStyle}>
      This is an info alert message with dismiss feature.
    </Alert>
    <Alert alertSeverity={'success'} onClose={action('Success Alert closed.')} style={alertStyle}>
    <AlertTitle alertTitleType={'bold'}>Success</AlertTitle>
      This is a success alert message with dismiss feature.
    </Alert>
  </div>
);

export const AlertWithIcon = () => (
  <div>
    <Alert alertSeverity={'error'} onClose={action('Error Alert closed.')} style={alertStyle}>
      <Icon name="heart" size="tiny" color="red"></Icon>
      This is an error alert message with dismiss feature.
    </Alert>
    <Alert alertSeverity={'warning'} onClose={action('Warning Alert closed.')} style={alertStyle}>
      <Icon name="home" size="tiny" color="orange"></Icon>
      This is a warning alert message with dismiss feature.
    </Alert>
    <Alert alertSeverity={'info'} onClose={action('Info Alert closed.')} style={alertStyle}>
      <Icon name="spinner" size="tiny" color="grey" loading></Icon>
      This is an info alert message with dismiss feature.
    </Alert>

    <Alert alertSeverity={'success'} onClose={action('Success Alert closed.')} style={alertStyle}>
    <Icon name="check" size="tiny" color="green"></Icon>
      This is a success alert message with dismiss feature.
    </Alert>
  </div>
);

export const AlertCustomization = () => (
  <div>
    <Alert
      alertSeverity={'error'}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '400px',
        backgroundColor: 'grey',
        color: 'white',
        zIndex: 1,
      }}
    >
      This is an alert message created with user customized styles by <strong>passing style prop to Alert component</strong>.
    </Alert>
    <Alert onClose={action('Alert closed.')} className="custom-css">
    This is an alert message created with user customized styles by <strong>specifying a custom css stylesheet</strong>.
    </Alert>
  </div>
);

export const AutoDisappearAlert = () => (
    <div>
      <Alert alertSeverity={'error'} duration={3000} style={alertStyle}>
        This alert will disappear in 3000 milliseconds.
      </Alert>
      <Alert alertSeverity={'warning'} duration={6000} style={alertStyle}>
      This alert will disappear in 6000 milliseconds.
      </Alert>
      <Alert alertSeverity={'info'} duration={9000} style={alertStyle}>
      This alert will disappear in 9000 milliseconds.
      </Alert>
      <Alert alertSeverity={'success'} duration={12000} onClose={action('Alert closed.')} style={alertStyle}>
      This alert will disappear in 12000 milliseconds.
      </Alert>
    </div>
  );