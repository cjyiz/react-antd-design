import React from 'react'
import classNames from 'classnames'
// step1   创建枚举类型
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

// step2  创建接口
// 创建的时候需要考虑可能会用到那些属性
interface BaseButtonProps {
  className?: string,
  disabled?: boolean,
  size?: ButtonSize,
  btnType?: ButtonType,
  // children为什么是一个ReactNode?
  children: React.ReactNode;
  href?: string
}
// 使用本身的类型约束覆盖全部默认的props,单独的一个&类似于mixin作用，即合并两个属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// 这里partial修饰符是使得上面两个类型中的所有参数都变得可选
export type ButtonProps=Partial<NativeButtonProps & AnchorButtonProps>
export const Button: React.FC<ButtonProps> = (props) => {
  // 因为是组件，所以必然是外面的父元素传值给他。
  // add1:因为上面替换了新的buttonProps，存在一些默认的props，所以用ES6的解构语法解析出来...restProps(这个名字可自取)
  // add2:props中自定义className，可以直接取出来放到classNames中
  const { btnType,className, disabled, size, children, href ,...restProps} = props
  // 使用classes管理类名
  const classes = classNames('btn', className,{
    // 这里的写法是:后面的变量如果存在，那么前面的类名就生效
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  // 可以把...restProps的参数解构到html标签中
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

// 这个defaultProps也是React.FC自带属性
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}