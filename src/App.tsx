import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          defaultIndex={0}
          mode={'vertical'}
          onSelect={(index) => {
            console.log('我是你大爷',index);
          }}
        >
          <MenuItem index={0}>1</MenuItem>
          <MenuItem index={1}   >
            2
          </MenuItem>
          <MenuItem index={2}>
          3
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
};
export default App;
