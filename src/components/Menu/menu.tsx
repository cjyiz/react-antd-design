import React, { createContext, useState } from 'react'
import classNames from 'classnames'
// 这个和menu很像啊,只不过一个是key:value模式
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
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
