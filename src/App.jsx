import { useState } from "react";
import "./App.css";
// const status = false;
const tabdata = [
  {
    titel: "product 1",
    id: 1,
    content: "Content 1",
  },
  {
    titel: "product 2",
    id: 2,
    content: "Content 2",
  },
  {
    titel: "product 3",
    id: 3,
    content: "Content 3",
  },
];

function App() {
  const [activeTabId, setactiveTabId] = useState(1);

  const handleActiveTa = (id) => {
    setactiveTabId(id);
  };

  return (
    // <div>
    //   <h1 className={`text heading ${status ? "green" : "red"} `}>Hello</h1>
    // </div>
    <div>
      <span className="close" onclick="searchToggle(this, event);"></span>
      <div className="tab-componets">
        {tabdata.map((item) => (
          <button
            id={item.id}
            className={`tab ${item.id === activeTabId ? "active" : ""}`}
            key={item.id}
            onClick={() => handleActiveTa(item.id)}
          >
            {item.titel}
          </button>
        ))}
      </div>
      <div className="TabContent">{tabdata[activeTabId - 1].content}</div>
    </div>
  );
}

export default App;
