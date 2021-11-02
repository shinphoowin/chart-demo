import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Menumini = ({ menulist, defaultSelected }) => {
  const [activeItem, setActiveItem] = useState(defaultSelected);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary>
      {menulist.map((el) => (
        <Menu.Item
          name={el}
          active={activeItem === el}
          onClick={handleItemClick}
          key={el}
          className="menu-txt"
        />
      ))}
    </Menu>
  );
};

export default Menumini;
