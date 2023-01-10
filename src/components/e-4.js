import * as d3 from "d3";
import { useEffect, useRef } from "react";

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: white");
};

export default function E4() {
  const canvasRef = useRef();
  const data = [100, 10, 110, 50, 40, 80];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = getSvg(canvas);

    const xFunc = (_, index) => index * 30 + 8;
    const yFunc = (data) => 140 - data;
    const drawLineChartGenerator = d3
      .line()
      .x(xFunc)
      .y(yFunc)
      .curve(d3.curveBasis);

    const path = svg
      .append("path")
      .attr("d", drawLineChartGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 5);
    //.attr("stroke-linecap", "round");

    const length = path.node().getTotalLength();

    path
      .attr("stroke-dashoffset", length)
      .attr("stroke-dasharray", length)
      .transition()
      .ease(d3.easeSin)
      .duration(1000)
      .attr("stroke-dashoffset", 2);
  }, []);

  return <div ref={canvasRef}></div>;
}
