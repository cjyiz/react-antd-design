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
  href?:string
}


export const Button: React.FC<BaseButtonProps> = (props) => {
  // 因为是组件，所以必然是外面的父元素传值给他
  const { btnType, disabled, size, children,href } = props
  // 使用classes管理类名
  const classes=classNames('btn',{
    // 这里的写法是:后面的变量如果存在，那么前面的类名就生效
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'disabled':(btnType===ButtonType.Link)&&disabled
  })
  if(btnType===ButtonType.Link&&href){
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }else{
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

// 这个defaultProps也是React.FC自带属性
Button.defaultProps={
  disabled:false,
  btnType:ButtonType.Default
}