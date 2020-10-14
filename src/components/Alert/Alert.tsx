import React, {FC, MouseEvent, HTMLAttributes, useState} from 'react';
import {unmountComponentAtNode} from 'react-dom';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

export type AlertSize = 'lg' | 'sm';
export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

export interface IAlertProps {
    /** set customized style */
    className?: string;
    /** set alert size */
    alertSize?: AlertSize;
    /** set alert severity */
    alertSeverity?: AlertSeverity; 
    /** set alert title */
    alertTitle?: string; 
    /** set click onClose button */
    onClose?: boolean;
}

export type patAlertProps = IAlertProps & HTMLAttributes<HTMLDivElement>;


export const Alert: FC<patAlertProps> = (props) =>{
    const [dismiss, setDismiss] = useState(false);
    const {className, alertSize, alertSeverity, alertTitle, onClose, children, ...rest} = props; 
    let styleClasses = classNames('alert', {
        [`alert-${alertSize}`]: !!alertSize,
        [`alert-${alertSeverity}`]: true,
        // [`alert-${withClose}`]: !!onClose,
    }); 
    if (className) {
        styleClasses += ' ' + className;
    }
    if (dismiss) {
        styleClasses += ' on-close';
    }

    const handleDelete = ()=>{
        setDismiss(true);
    }

    let icon;
    switch(alertSize){
        case 'lg':
            icon = <Icon disabled={false} loading={false} name='times' color='white'/>
            break;
        case 'sm':
            icon = <Icon disabled={false} loading={false} name='times' color='white' size='mini'/>
            break;
        default:
            icon = <Icon disabled={false} loading={false} name='times' color='white' size='small'/>;
    }

    let alert;
    alert = (
        <div className={styleClasses} data-testid='alert-element' {...rest}>
            <div>
            {(alertTitle !== undefined) && (<div><strong>{alertTitle}</strong></div>)}
            {children}
            </div>
            {(onClose) && (
                <div className='dismiss' data-testid='dismiss-element' onClick={handleDelete}>
                    {icon}
                </div>
            )}
        </div>
    )
    return alert;
}

Alert.defaultProps={
    alertSeverity: 'info',
}

export default Alert;