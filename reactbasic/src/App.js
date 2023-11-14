import "./App.css";
import AppleData from "./data.json";
import Apple from "./components/Apple";
import React, { useEffect, useState } from "react";

// 초기 json데이터를 이용하여 사과 정보를 가져옵니다.
function parseData() {
  const apples = {};

  AppleData.forEach((item) => {
    apples[item.id] = item;
  });

  return apples;
}

function positionApples(apples) {
  Object.values(apples).forEach((apple) => {
    apple.position = {
      left: apple.offset.x,
      top: apple.offset.y,
    };
  });
}

function App() {
  // 사과들의 상태 정보 관리
  const [apples, setApples] = useState({});

  useEffect(() => {
    const parsedApples = parseData();
    positionApples(parsedApples);
    setApples({ ...parsedApples });
  }, []);

  const AppleList = Object.values(apples).map((apple) => {
    return (
      <Apple
        key={apple.id}
        apple={apple}
        // 드래그 시작하면 트리거
        onDragStart={(dragOffset) => setDragAppleInfo({ apple, drageOffset })}
        // 드래그 끝내면 트리거
        onDragEnd={() => setDragAppleInfo(null)}
      />
    );
  });

  return (
    <div className="App">
      <ul>{AppleList}</ul>
    </div>
  );
}
export default App;
