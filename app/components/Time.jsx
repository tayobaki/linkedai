"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();

      if (h >= 12) {
        h = h - 12;
      } else {
      }

      h = h ? h : 12;

      setHour(h);
      setMinute(m);
      setSecond(s);
    });
  });

  return (
    <div className="uppercase  font-unica text-3xl space-x-4">
      <span>
        <span>{hour}</span>
        <span className="text-sm">h</span>
      </span>
      <span>
        <span>{minute}</span>
        <span className="text-sm">m</span>
      </span>
      <span>
        <span>{second}</span>
        <span className="text-sm">s</span>
      </span>
    </div>
  );
}
