import * as d3 from "d3";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const drawHat = (svg) => {
  svg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 70)
    .attr("height", 40)
    .attr("fill", "black")
    .attr("transform", "translate(270,40) rotate(30)");
};

const drawBody = (svg) => {
  svg
    .append("circle")
    .attr("cx", 250)
    .attr("cy", 300)
    .attr("r", 100)
    .attr("stroke", "black")
    .attr("stroke-width", 12)
    .attr("fill", "white");

  svg
    .append("circle")
    .attr("cx", 250)
    .attr("cy", 150)
    .attr("r", 70)
    .attr("stroke", "black")
    .attr("stroke-width", 12)
    .attr("fill", "white");
};

const drawEyes = (svg) => {
  svg
    .append("circle")
    .attr("cx", 220)
    .attr("cy", 150)
    .attr("r", 12)
    .attr("fill", "black")
    .attr("class", "left-eye");

  svg
    .append("circle")
    .attr("cx", 270)
    .attr("cy", 150)
    .attr("r", 12)
    .attr("fill", "black");
};

const drawArms = (svg) => {
  svg
    .append("line")
    .attr("x1", 120)
    .attr("y1", 180)
    .attr("x2", 170)
    .attr("y2", 240)
    .attr("stroke", "black")
    .attr("stroke-width", 12);

  svg
    .append("line")
    .attr("x1", 380)
    .attr("y1", 180)
    .attr("x2", 330)
    .attr("y2", 240)
    .attr("stroke", "black")
    .attr("stroke-width", 12);
};

const getSvg = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: #79");
};

const E1Block = styled.div`
  .left-eye {
    animation-duration: 0.5s;
    animation-name: blink;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 0 150px;
  }
  @keyframes blink {
    to {
      transform: scaleY(0.1);
    }
  }
`;

export default function E1() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = getSvg(canvas);

    drawHat(svg);
    drawBody(svg);
    drawEyes(svg);
    drawArms(svg);
  }, []);

  return <E1Block ref={canvasRef}></E1Block>;
}
