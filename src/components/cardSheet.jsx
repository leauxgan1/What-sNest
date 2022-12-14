import React, { Component } from 'react';
import Moveable from "react-moveable";
import { ref } from "framework-utils";
import { Frame } from "scenejs";

class CardSheet extends Component {
    frame = new Frame({
        width: "250px",
        height: "200px",
        left: "0px",
        top: "0px",
        transform: {
          rotate: "0deg",
          scaleX: 1,
          scaleY: 1,
          matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }
      });
      state = {
        target: null,
        container: null,
        scalable: true,
        resizable: false,
        warpable: false
      };
      render() {
        const { target } = this.state;
        return (
          <div className="page main">
            <Moveable 
              ref={ref(this, "moveable")}
              target={target}
              pinchThreshold={20}
              container={document.body}
              draggable={true}
              scalable={false}
              resizable={true}
              warpable={false}
              rotatable={false}
              pinchable={true}
              origin={false}
              throttleDrag={1}
              throttleResize={1}
              onDrag={this.onDrag}
              onResize={this.onResize}
              onScale={this.onScale}
              onWarp={this.onWarp}
              onRotate={this.onRotate}
              onPinch={this.onPinch}
            />
            <div className="container">
              <div className="moveable">
                <input type="text" placeholder={this.props.initialText}></input>
                
              </div>
            </div>
          </div>
        );
      }
      componentDidMount() {
        this.setState({
          target: document.querySelector(".moveable")
        });
        window.addEventListener("resize", this.onWindowResize);
      }
      componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize);
      }
      onWindowResize = () => {
        this.moveable.updateRect();
      };
      setTransform(target) {
        target.style.cssText = this.frame.toCSS();
      }
      onPinch = ({ clientX, clientY }) => {

      };
      onDrag = ({ target, clientX, clientY, top, left, isPinch }) => {
        this.frame.set("left", `${left}px`);
        this.frame.set("top", `${top}px`);
        this.setTransform(target);
      };
      onScale = ({ target, delta, clientX, clientY, isPinch }) => {
        
        const scaleX = this.frame.get("transform", "scaleX") * 1;
        const scaleY = this.frame.get("transform", "scaleY") * 1;
        this.frame.set("transform", "scaleX", scaleX);
        this.frame.set("transform", "scaleY", scaleY);
        this.setTransform(target);

      };
      onRotate = ({ target, clientX, clientY, beforeDelta, isPinch }) => {
        const deg = parseFloat(this.frame.get("transform", "rotate")) + beforeDelta;
    
        this.frame.set("transform", "rotate", `${deg}deg`);
        this.setTransform(target);
      };
      onResize = ({ target, clientX, clientY, width, height, isPinch }) => {
        this.frame.set("width", `${width}px`);
        this.frame.set("height", `${height}px`);
        console.log(clientY);
        console.log(parseInt(this.frame.get("top")));

        if (clientY < this.frame.get("top")) {
          console.log("SUCCESS");
          this.frame.set("top", `${height - clientY}px`);
        }

        this.setTransform(target);
      };
      onWarp = ({ target, clientX, clientY, delta, multiply }) => {
        this.frame.set(
          "transform",
          "matrix3d",
          multiply(this.frame.get("transform", "matrix3d"), delta)
        );
        this.setTransform(target);
      };
      onEnd = () => {
        this.label.style.display = "none";
      };

}

export default CardSheet;