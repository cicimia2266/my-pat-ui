import React, {FC, MouseEvent, HTMLAttributes,} from 'react';
import { classNames } from '../../utils/classNames';

export type AlertSize = 'lg' | 'sm';
export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

export interface IAlertProps {
    className?: string;
    alertSize?: AlertSize;
    alertSeverity?: AlertSeverity;  
}

export type patAlertProps = IAlertProps & HTMLAttributes<HTMLDivElement>;


export const Alert: FC<patAlertProps> = (props) =>{
    const {className, alertSize, alertSeverity, children, ...rest} = props; 
    let styleClasses = classNames('alert', {
        [`alert-${alertSize}`]: !!alertSize,
        [`alert-${alertSeverity}`]: true,
    }); 
    if (className) {
        styleClasses += ' ' + className;
    }

    let alert;
    alert = (
    <div className={styleClasses} data-testid='alert-element' {...rest}>{children}</div>
    )
    return alert;
}

Alert.defaultProps={
    alertSeverity: 'info',
}

export default Alert;