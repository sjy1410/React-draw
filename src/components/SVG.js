import styled from "@emotion/styled";

const SnowmanHat = () => {
  return (
    <rect
      x={0}
      y={0}
      width={70}
      height={40}
      fill="black"
      transform="translate(270,45) rotate(30)"
    ></rect>
  );
};

const SnowmanBody = () => {
  return (
    <svg>
      <circle
        cx={250}
        cy={300}
        r={100}
        stroke="black"
        strokeWidth={12}
        fill="white"
      ></circle>
      <circle
        cx={250}
        cy={150}
        r={70}
        stroke="black"
        strokeWidth={12}
        fill="white"
      ></circle>
    </svg>
  );
};

const SnowmanEyes = () => {
  return (
    <svg>
      <circle
        className="left-eye"
        cx={220}
        cy={150}
        r={12}
        fill="black"
      ></circle>
      <circle cx={270} cy={150} r={12} fill="black"></circle>
    </svg>
  );
};

const SnowmanArms = () => {
  return (
    <svg>
      <line
        x1={120}
        y1={180}
        x2={170}
        y2={240}
        stroke="black"
        strokeWidth={12}
      ></line>
      <line
        x1={380}
        y1={180}
        x2={330}
        y2={240}
        stroke="black"
        strokeWidth={12}
      ></line>
    </svg>
  );
};

const SnowmanTag = () => {
  return (
    <text x={220} y={450}>
      눈사람입니다
    </text>
  );
};

const Snowman = styled.svg`
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

export default function SVG() {
  return (
    <Snowman width={500} height={500} style={{ backgroundColor: "#79edff" }}>
      <SnowmanHat></SnowmanHat>
      <SnowmanBody></SnowmanBody>
      <SnowmanEyes></SnowmanEyes>
      <SnowmanArms></SnowmanArms>
      <SnowmanTag></SnowmanTag>
    </Snowman>
  );
}
