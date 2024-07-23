import { DESKTOP_BREAKPOINT } from "../../config/config";

import MainContainer from "../../ui/MainContainer";
import FinishPageTitle from "./FinishPageTitle";
import Header from "../../ui/Header";
import Score from "./Score";

import styled from "styled-components";

const DesktopLayout = styled.main`
    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        display: flex;
        gap: 8rem;
    }
`;

function FinishPage() {
    return (
        <MainContainer>
            <Header />
            <DesktopLayout>
                <FinishPageTitle />
                <Score />
            </DesktopLayout>
        </MainContainer>
    );
}

export default FinishPage;
