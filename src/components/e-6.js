import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import LineChart from "./LineChart";

const graphInfos = [
  { key: "평균최고기온(°C)", color: "red" },
  { key: "평균최저기온(°C)", color: "blue" },
  { key: "평균기온(°C)", color: "orange" },
];

export default function E6() {
  const [data, setData] = useState([]);
  const canvasRef = useRef();

  useEffect(() => {
    d3.csv("/data/data.csv").then((data) => {
      setData(data);
    });
  }, []);

  return <LineChart graphInfos={graphInfos}></LineChart>;
}
