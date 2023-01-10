import * as d3 from "d3";
import { useEffect, useRef } from "react";

const getMinMax = (arr) => {
  let minV = 9999;
  let maxV = -1;
  arr.forEach((d) => {
    if (d < minV) {
      minV = d;
    }
    if (d > maxV) {
      maxV = d;
    }
  });
  return [minV, maxV];
};

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: white");
};

const PieChart = ({ data }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = getSvg(canvas);

    const arcGenerator = d3.arc().innerRadius(50).outerRadius(100);
    const pieGenerator = d3.pie();

    const g = svg.append("g").attr("transform", "translate(150,150)");
    const [minV, maxV] = getMinMax(data);

    g.selectAll("path")
      .data(pieGenerator(data))
      .enter()
      .append("path")
      .attr("fill", (d) => {
        if (d.data == minV) {
          return "blue";
        }
        if (d.data == maxV) {
          return "red";
        }
        return "white";
      })
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("d", arcGenerator);
  }, []);

  return <div ref={canvasRef}></div>;
};

export default PieChart;
