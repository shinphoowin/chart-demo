import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import RenChart from "./Chart";
import icon from "./icon.svg";

function ExpandModal({
  data,
  menulist,
  handleItemClick,
  activeItem,
  handleCompare,
}) {
  const [openChart, setOpenChart] = React.useState(false);
  return (
    <>
      <div className="btnGp">
        <Button onClick={() => setOpenChart(true)}>Expand</Button>
        <div
          style={{ display: "inline", cursor: "pointer" }}
          onClick={handleCompare}
        >
          <Image src={icon} style={{ marginLeft: 40 }} verticalAlign="middle" />{" "}
          <span>Compare</span>
        </div>
      </div>
      <Modal
        onClose={() => setOpenChart(false)}
        onOpen={() => setOpenChart(false)}
        open={openChart}
        dimmer="inverted"
      >
        <Modal.Content>
          <div className="modal-Comparebtn" onClick={handleCompare}>
            <Image
              src={icon}
              style={{ marginLeft: 40 }}
              verticalAlign="middle"
            />{" "}
            <span>Compare</span>
          </div>
          <RenChart
            data={data}
            menulist={menulist}
            handleItemClick={handleItemClick}
            activeItem={activeItem}
          />
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ExpandModal;
