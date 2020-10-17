import React, { FC, HTMLAttributes } from 'react';

export type AlertTitleType = 'bold' | 'italic';

export interface IAlertTitleProps {
  /** set alert title type */
  alertTitleType?: AlertTitleType;
  /** set customized style */
  className?: string;
}

export type patAlertTitleProps = IAlertTitleProps &
  HTMLAttributes<HTMLDivElement>;

const AlertTitle: FC<patAlertTitleProps> = (props) => {
  const { className, alertTitleType, children, ...rest } = props;
  let alertTitle;
  switch (alertTitleType) {
    case 'bold':
      alertTitle = (
        <div {...rest}>
          <strong>{children}</strong>
        </div>
      );
      break;
    case 'italic':
      alertTitle = (
        <div {...rest}>
          <em>{children}</em>
        </div>
      );
      break;
    default:
      alertTitle = <div {...rest}>{children}</div>;
      break;
  }

  return alertTitle;
};

export default AlertTitle;
