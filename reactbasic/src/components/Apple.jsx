import React from "react";

export default function Apple({ apple, onDragStart, onDragEnd }) {
  return (
    <li className="apple" style={{ left: apple.position.left, top: apple.position.top }}>
      Apple
    </li>
  );
}
