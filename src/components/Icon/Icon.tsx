import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
// 定义主题种类
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
// 定义组件接口类型，继承了FontAwesomeIconProps的属性
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps
}
export const IconFont: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props
    const classes = classNames('viking-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <div>
            <FontAwesomeIcon className={classes}  {...restProps} />
        </div>
    )
}