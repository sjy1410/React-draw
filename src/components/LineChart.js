import * as d3 from "d3";
import { useEffect, useRef } from "react";

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: white");
};

const LineChart = ({ graphInfos, data }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = getSvg(canvas);

    d3.csv("/data/data.csv").then((data) => {
      const yScaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 200]);
      graphInfos.forEach((info) => {
        const xFunc = (_, index) => index * 30;
        const yFunc = (yData) => yScaleFunc(40 - yData[info.key]);
        const linearGenarator = d3.line().x(xFunc).y(yFunc);

        svg
          .append("path")
          .attr("stroke", info.color)
          .attr("stroke-width", 4)
          .attr("fill", "none")
          .attr("d", linearGenarator(data));
      });
    });
  }, [data]);

  return <div ref={canvasRef}></div>;
};

export default LineChart;
