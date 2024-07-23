import { Device } from "../../types/deviceTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import MainContainer from "../../ui/MainContainer";
import ThemeToggle from "../../ui/ThemeToggle";
import HomePageTitle from "./HomePageTitle";
import SubjectList from "./SubjectList";

import styled from "styled-components";
import { DESKTOP_BREAKPOINT } from "../../config/config";

type ThemeToggleWrapperProps = {
  $device: Device;
};

const ThemeToggleWrapper = styled.div<ThemeToggleWrapperProps>`
  display: flex;
  justify-content: flex-end;
  ${(props) => props.$device === Device.Mobile && "margin-top: 1.4375rem"};
`;

const ContentWrapper = styled.main`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: flex;
    gap: 8rem;
  }
`;

const mobileStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

function HomePage() {
  const device = useSelector((state: RootState) => state.device.value);

  return (
    <MainContainer style={mobileStyles}>
      {device !== Device.Mobile && (
        <ThemeToggleWrapper $device={device}>
          <ThemeToggle />
        </ThemeToggleWrapper>
      )}
      {device === Device.Mobile && (
        <ThemeToggleWrapper $device={device}>
          <ThemeToggle />
        </ThemeToggleWrapper>
      )}
      <ContentWrapper>
        <HomePageTitle />
        <SubjectList />
      </ContentWrapper>
    </MainContainer>
  );
}

export default HomePage;
