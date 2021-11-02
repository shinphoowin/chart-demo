import React, { useState, useEffect } from "react";
import RenChart from "./components/Chart";
import Menumini from "./components/Menumini";
import ExpandModal from "./components/Modal";
import chartDataList from "./data";

function App() {
  const [activeItem, setActiveItem] = useState("3d");
  const [compareData, setCompareData] = useState({ datasets: [] });
  const [data, setData] = useState({ datasets: [] });
  const [showCompare, setShowCompare] = useState(false);

  const menulist = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
  const chartmenulist = ["1d", "3d", "1w", "1m", "6m", "1yr", "max"];

  useEffect(() => {
    setData({ datasets: [chartDataList[chartmenulist.indexOf(activeItem)]] });
    setCompareData({
      datasets: [chartDataList[chartmenulist.indexOf(activeItem)]],
    });
  }, []);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    let selectedIdx = chartmenulist.indexOf(name);
    setData({ datasets: [chartDataList[selectedIdx]] });
    let uniqueItemArr = compareData.datasets.filter(
      (el) => el.borderColor !== chartDataList[selectedIdx].borderColor
    );
    setCompareData({
      datasets: [...uniqueItemArr, chartDataList[selectedIdx]],
    });
    setShowCompare(false);
  };

  const handleCompare = () => {
    setCompareData(compareData);
    setShowCompare(true);
  };

  return (
    <>
      <div className="container">
        <label className="commonFont title-big">63,179.71</label>
        <sup className="title-sub">USD</sup>
        <h2 className="success-txt">+ 2,161.42 (3.54%)</h2>
        <Menumini menulist={menulist} defaultSelected="Summary" />
      </div>
      <hr className="fullWd" />
      <div className="container">
        <ExpandModal
          data={showCompare ? compareData : data}
          menulist={chartmenulist}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          handleCompare={() => handleCompare()}
        />
        <RenChart
          data={showCompare ? compareData : data}
          menulist={chartmenulist}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          handleCompare={() => handleCompare()}
        />
      </div>
    </>
  );
}

export default App;
