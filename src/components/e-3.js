import * as d3 from "d3";
import { useEffect, useRef } from "react";

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: white");
};

export default function E3() {
  const canvasRef = useRef();
  const data = [100, 10, 110, 50, 40, 80];

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = getSvg(canvas);

    data.forEach((item, index) => {
      svg
        .append("rect")
        .attr("id", `rect-${index}`)
        .attr("width", 20)
        .attr("height", item)
        .attr("x", index * 30)
        .attr("y", 140 - item);
    });

    const xFunc = (_, index) => index * 30 + 10;
    const yFunc = (data) => 140 - data;
    const drawLineChartGenerator = d3
      .line()
      .x(xFunc)
      .y(yFunc)
      .curve(d3.curveBasis);

    svg
      .append("path")
      .attr("d", drawLineChartGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 5);
    //.attr("stroke-linecap", "round");
  }, []);

  return <div ref={canvasRef}></div>;
}
