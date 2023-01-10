import * as d3 from "d3";
import { useEffect, useRef } from "react";
import Piechart from "./PieChart";

export default function E5() {
  const canvasRef = useRef();
  const data = [100, 10, 110, 50, 40, 80];

  return (
    <div ref={canvasRef}>
      <Piechart data={data} innerRadius={20} outerRadius={100} />
    </div>
  );
}
