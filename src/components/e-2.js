import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Max = (arr) => {
  let currentMaxValue = -1;
  let maxIdx = -1;
  arr.forEach((item, index) => {
    if (currentMaxValue < item) {
      currentMaxValue = item;
      maxIdx = index;
    }
  });
  return maxIdx;
};

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: white");
};

export default function E2() {
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
        .attr("height", 0)
        .attr("x", index * 30)
        .attr("y", 140)
        .transition()
        .duration(2000)
        .ease(d3.easeBack)
        .attr("height", item)
        .attr("y", 140 - item);

      d3.select(`#rect-${Max(data)}`).style("fill", "red");

      /*svg
        .append("text")
        .attr("x", index * 30 + 2)
        .attr("y", 140 - item - 10)
        .text(item)
        .style("font-size", "12px");*/
    });
  }, []);

  return <div ref={canvasRef}></div>;
}
