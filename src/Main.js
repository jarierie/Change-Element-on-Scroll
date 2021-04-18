import React from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import meenoi1 from "./assets/meenoi.jpg";
import meenoi2 from "./assets/meenoi2.jpg";
import meenoi3 from "./assets/meenoi3.jpg";
import meenoi4 from "./assets/meenoi4.jpg";
import meenoi5 from "./assets/meenoi5.jpg";

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 10000px;
  background-color: #0d0d0d;
  color: white;
  text-align: center;
  position: relative;
  img {
    position: fixed;
    left: 0;
    max-width: 40vw;
  }
  div {
    position: fixed;
    display: flex;
    align-items: center;
    width: 1000px;
    height: 100px;
  }
  h1 {
    font-size: 100px;
    z-index: 99;
  }
`;

const Main = () => {
  const set = [
    {
      imageUrl: meenoi1,
      text: "Mic test",
    },
    {
      imageUrl: meenoi2,
      text: "are you there?",
    },
    {
      imageUrl: meenoi3,
      text: "this is",
    },
    {
      imageUrl: meenoi4,
      text: "just a test",
    },
    {
      imageUrl: meenoi5,
      text: ":D",
    },
  ];

  const numOfSection = set.length;
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const [imgId, setImgId] = useState(0);

  const handleClick = (e) => {
    if (imgId >= set.length - 1) {
      setImgId(0);
    } else {
      setImgId(imgId + 1);
    }
  };

  const anim = () => {
    gsap.fromTo(imgRef.current, 5, { opacity: 0 }, { opacity: 1 });
    gsap.fromTo(
      textRef.current,
      1,
      { opacity: 0, top: 500, rotate: 20 },
      { opacity: 1, top: 0, rotate: 0, delay: 2 }
    );
  };
  useEffect(() => {
    anim();
  }, [imgId]);

  useEffect(() => {
    document.addEventListener("scroll", handleClick);
    return () => {
      document.removeEventListener("scroll", handleClick);
    };
  });
  return (
    <>
      <MainSection onClick={handleClick}>
        <img ref={imgRef} src={set[imgId].imageUrl}></img>
        <div ref={textRef}>
          <h1>{set[imgId].text}</h1>
        </div>
      </MainSection>{" "}
    </>
  );
};

export default Main;
