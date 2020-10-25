import React, { HtmlHTMLAttributes } from "react";
import classNames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// 使用交叉类型 intersection  ，多种类型合并为一个新类型
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
  // partieal 将属性设置为可选,这样ButtonProps属性就是可选的了,因为button其中也包含了a标签，所以这两者都要考虑
export type ButtonProps=Partial<NativeButtonProps &AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  // 这里使用...restProps 解构赋值其他所有属性
  const { btnType,className, disabled, size, children, href,...restProps } = props;
  const classes = classNames("btn",className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a 

      className={classes} href={href}
      {...restProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}
      {...restProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};
export default Button;
