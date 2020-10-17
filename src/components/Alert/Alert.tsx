import React, { FC, HTMLAttributes, useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

export type AlertSize = 'lg' | 'sm';
export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

export interface IAlertProps {
  /** set alert size */
  alertSize?: AlertSize;
  /** set alert severity */
  alertSeverity?: AlertSeverity;
  /** set click onClose button */
  onClose?: boolean;
  /** set duration in milliseconds*/
  duration?: number;
  /** set customized style */
  className?: string;
}

export type patAlertProps = IAlertProps & HTMLAttributes<HTMLDivElement>;

/**
 * An Alert displays a short, important message to attract the user's attention.
 *
 * ```js
 * import {Alert} from 'pat-ui'
 * ```
 */
export const Alert: FC<patAlertProps> = (props) => {
  const [dismiss, setDismiss] = useState(false);
  const {
    className,
    alertSize,
    alertSeverity,
    onClose,
    duration,
    children,
    ...rest
  } = props;
  let styleClasses = classNames('alert', {
    [`alert-${alertSize}`]: !!alertSize,
    [`alert-${alertSeverity}`]: true,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  if (dismiss) {
    styleClasses += ' on-close';
  }
  useEffect(()=>{
    if (duration) {
        setTimeout(()=>{setDismiss(true)}, duration)
    }
  },[duration])

  const handleDelete = () => {
    setDismiss(true);
  };

  //To adjust the close icon size based on alert size
  let icon;
  switch (alertSize) {
    case 'lg':
      icon = (
        <Icon disabled={false} loading={false} name="times" color="white" />
      );
      break;
    case 'sm':
      icon = (
        <Icon disabled={false} loading={false} name="times" color="white" size="mini" />
      );
      break;
    default:
      icon = (
        <Icon disabled={false} loading={false} name="times" color="white" size="small" />
      );
  }

  let alert;
  alert = (
    <div className={styleClasses} data-testid="alert-element" {...rest}>
      <div>{children}</div>
      {onClose && (
        <div className="dismiss" data-testid="dismiss-element" onClick={handleDelete} >
          {icon}
        </div>
      )}
    </div>
  );
  return alert;
};

Alert.defaultProps = {
  alertSeverity: 'info',
};

export default Alert;
