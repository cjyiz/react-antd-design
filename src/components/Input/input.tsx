import React, { InputHTMLAttributes, ReactElement } from 'react'
import { IconProps } from '../Icon/Icon'
type InputSize = 'lg' | 'sm'
// 因为要支持所有Input属性，所以要继承一下所有参数
// add1:如果类型不匹配，1.给外面size换名字  2.使用ts自带Omit忽略接口中的某个值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProps;
    prepand?: string | ReactElement
}


export const Input: React.FC<InputProps> = (props) => {
    const { disabled, size, icon, type, prepand, style, ...restProps } = props
    return (
        <div></div>
    )
}