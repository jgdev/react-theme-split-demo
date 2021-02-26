import React from "react";
import styled from "styled-components";
import { addPaddingLimit } from "../utils/common";
import { isMobile } from "../utils/constants";

import arrowsSvg from "../assets/images/arrows.svg";

const StyledDivider = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;

  @keyframes initialDividerAnimation {
    0% {
      left: 0px;
    }
    100% {
      left: 50%;
    }
  }

  ${({ direction }: any) =>
    direction === "vertical" &&
    `
    width: 5px;
    touch-action: pan-y;
    background-color: #24292e7a;
  `}

  ${({ direction }: any) =>
    direction === "vertical" &&
    `
    width: 5px;
    touch-action: pan-y;
    background-color: #24292e7a;
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

  .control {
    top: ${isMobile ? "80vh" : "calc(50vh - 48px)"};
    margin-left: -24px;
    border-radius: 24px;
    height: 48px;
    width: 48px;
    background-color: #4c5966;
    box-shadow: 0px 3px 3px rgb(0, 0, 0, 0.5);
    bottom: auto;
    position: relative;
    left: calc(50%);

    &:active {
      cursor: grabbing;
    }

    .arrows {
      position: relative;
      width: 24px;
      height: 48px;
      background-image: url(${arrowsSvg});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      margin: 0px auto;
    }
  }
`;

export const Divider = ({
  onChangeOffset = () => {},
  onTransitionEnd = () => {},
  initialOffset = 0,
  direction = "vertical",
  moveEffect = false,
  moveEffectDelay = 1000,
  moveTo = 0,
  transitionEnded = false,
  ...props
}: any) => {
  const [position, setPosition] = React.useState(initialOffset);
  const [canMove, _setCanMove] = React.useState({ canMove: false, direction });
  const canMoveRef = React.useRef(canMove);
  const setCanMove = (value: { canMove: boolean; direction: string }) => {
    canMoveRef.current = value;
    _setCanMove(value);
  };

  const updatePosition = (newPosition: number) => {
    setPosition(newPosition);
    onChangeOffset(newPosition);
  };

  const handleMoveDivider = (e: any) => {
    if (!canMoveRef.current.canMove) return;
    const event = e.type === "touchmove" ? e.touches[0] : e;
    const value = direction === "vertical" ? event.clientX : e.clientY;
    const maxValue =
      direction === "vertical" ? window.innerWidth : window.innerHeight;
    const _position = addPaddingLimit(value, maxValue);
    updatePosition(_position);
  };

  const handleDividerMouseDown = (e: MouseEvent) => {
    const element = e.target as Element;

    if (
      element.id === `divider-${direction}` ||
      element.id === `control-${direction}` ||
      (element.parentElement &&
        element.parentElement.id === `control-${direction}`)
    ) {
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
      moveEffect={moveEffect}
      moveTo={moveTo}
      moveEffectDelay={moveEffectDelay}
      {...props}
      style={{
        animation: moveEffect && `${moveEffectDelay}ms initialDividerAnimation`,
        ...((direction === "vertical" && { left: `${position}px` }) || {}),
        ...((direction === "horizontal" && { top: `${position}px` }) || {}),
      }}
    >
      <div className="control" id={`control-${direction}`}>
        <div className="arrows" />
      </div>
    </StyledDivider>
  );
};

export default Divider;
