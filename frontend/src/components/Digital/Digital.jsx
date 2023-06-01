import React, { useEffect, useState } from "react";

function Digital() {
  const curr = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curr);

  useEffect(() => {
    setInterval(() => {
      const cur = new Date().toLocaleTimeString();
      setTime(cur);
    }, 1000);
  });

  return <div>{time}</div>;
}

export default Digital;
