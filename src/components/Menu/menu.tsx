import React, { useState, createContext } from "react";
import classNames from "classnames";
// 如果有一样的就抽出来写一个类型
type SelectCallback = (selectedIndex: number) => void;
type MenuMode = "horizotal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}
interface IMenucontext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenucontext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
  });
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenucontext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizotal",
};

export default Menu;
