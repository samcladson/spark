import React from "react";

const Canvas = () => <canvas style={style.canvas} />;
const style = {
  canvas: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: 20,
  },
};
export default Canvas;
