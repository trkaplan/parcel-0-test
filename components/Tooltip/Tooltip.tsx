// Reference (Thanks!)
// https://dev.to/vtrpldn/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-3pnk

import { useState } from "react";
import PropTypes from "prop-types";

import * as S from "./Tooltip.styled";

export const Tooltip = ({ delay, children, direction, content }) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <S.Wrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <S.Tooltip direction={direction}>{content}</S.Tooltip>}
    </S.Wrapper>
  );
};

Tooltip.propTypes = {
  delay: PropTypes.string,
  children: PropTypes.object.isRequired,
  direction: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};