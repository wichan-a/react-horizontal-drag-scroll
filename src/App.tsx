import * as React from "react";
import HorizontalDragScroll from "./HorizontalDragScroll";
import "./style.css";

type item = {
  id: number;
  color: string;
  width: number;
};

export default function App() {
  const items: item[] = [
    { id: 1, color: "red", width: 500 },
    { id: 2, color: "blue", width: 500 },
    { id: 3, color: "yellow", width: 500 },
    { id: 4, color: "green", width: 500 },
    { id: 5, color: "pink", width: 500 }
  ];

  return (
    <div className="app">
      <HorizontalDragScroll>
        <div className="content">
          {items.map((item: item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  background: item.color,
                  width: item.width
                }}
              ></div>
            );
          })}
        </div>
      </HorizontalDragScroll>
    </div>
  );
}
