import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'
// 这个和menu很像啊,只不过一个是key:value模式
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    // 点击菜单项触发的回调函数
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}
interface ImenuContext {
    index: number;
    onSelect?: SelectCallback;
}
// 因为要父子组件之间传值，所以要用contenxt
export const MenuContext = createContext<ImenuContext>({ index: 0 })
export const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props
    const classes = classNames('vikingd-menu', className, {
        'menu-vertical': mode === 'vertical'
    })

    const [currentActive, setActive] = useState(defaultIndex)
    // 这里拿到onselect方法，需要绑定index，并进行类型判断
    const handleClick = (index: number) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: ImenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick
    }
    // 不要直接使用map,用react中自带函数替代
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement:any = child as React.FunctionComponentElement<MenuItemProps/>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component")
            }
        })
    }
    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}
