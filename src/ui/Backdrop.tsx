import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";

import styled from "styled-components";

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
`;

function Backdrop() {
  const device = useSelector((state: RootState) => state.device.value);
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <BackdropContainer role="banner">
      <img src={`pattern-background-${device}-${theme}.svg`} alt="backdrop" />
    </BackdropContainer>
  );
}

export default Backdrop;
