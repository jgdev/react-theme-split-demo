import React from "react";
import styled from "styled-components";
import { addPaddingLimit } from "../utils/common";

const StyledDivider = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;

  ${({ direction }: any) =>
    direction === "vertical" &&
    `
    width: 5px;
    touch-action: pan-y;
    background-color: rgb(118, 185, 0, 0.5);
  `}

  ${({ direction }: any) =>
    direction === "horizontal" &&
    `
    height: 5px;
    width: 100%;
    touch-action: pan-x;
    background-color: #ff5b009e;
    top: 0;
  `}

  cursor: grab;
  user-select: none;
  opacity: 1;
  z-index: 3;
`;

export const Divider = ({
  onChangeOffset = () => {},
  initialOffset = 0,
  direction = "vertical",
  ...props
}: any) => {
  const [position, setPosition] = React.useState(initialOffset);
  const [canMove, _setCanMove] = React.useState({ canMove: false, direction });
  const canMoveRef = React.useRef(canMove);
  const setCanMove = (value) => {
    canMoveRef.current = value;
    _setCanMove(value);
  };

  const handleMoveDivider = (e: MouseEvent) => {
    if (!canMoveRef.current.canMove) return;
    const value = direction === "vertical" ? e.clientX : e.clientY;
    const maxValue =
      direction === "vertical" ? window.innerWidth : window.innerHeight;
    const _position = addPaddingLimit(value, maxValue);
    setPosition(_position);
    onChangeOffset(_position);
  };

  const handleDividerMouseDown = (e: MouseEvent) => {
    const element = e.target as Element;

    if (element.id === `divider-${direction}`) {
      setCanMove({ canMove: true, direction });
    }
  };

  const handleDividerMouseUp = (e: MouseEvent) => {
    setCanMove({ canMove: false, direction });
  };

  const eventGroups = [
    [handleMoveDivider, "mousemove", "touchmove"],
    [handleDividerMouseDown, "mousedown", "touchstart"],
    [handleDividerMouseUp, "mouseup", "touchend"],
  ];

  React.useEffect(() => {
    eventGroups.forEach((eventGroup: any) => {
      const [fn, ...eventNames] = eventGroup;
      eventNames.forEach((e: string) => document.addEventListener(e, fn));
    });

    return () => {
      eventGroups.forEach((eventGroup: any) => {
        const [fn, ...eventNames] = eventGroup;
        eventNames.forEach((e: string) => document.removeEventListener(e, fn));
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <StyledDivider
      direction={direction}
      id={`divider-${direction}`}
      {...props}
      style={{
        ...((direction === "vertical" && { left: `${position}px` }) || {}),
        ...((direction === "horizontal" && { top: `${position}px` }) || {}),
      }}
    />
  );
};

export default Divider;
