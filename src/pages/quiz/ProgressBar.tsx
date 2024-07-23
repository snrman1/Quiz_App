import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";
import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type ContainerProps = {
    $theme: Theme;
};

type FillProps = {
    $percentage: number;
};

const Container = styled.div<ContainerProps>`
    width: 100%;
    background-color: ${props => (props.$theme === "light" ? "var(--clr-lt-700)" : "var(--clr-dt-600)")};
    height: 1rem;
    border-radius: 999px;
    padding: 0.25rem;
    margin-bottom: 2.5rem;

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        margin-bottom: 4rem;
    }

    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        margin-bottom: 7rem;
    }
`;

const Fill = styled.div<FillProps>`
    width: ${props => props.$percentage}%;
    background-color: var(--clr-accent);
    height: 100%;
    min-height: 0.5rem;
    border-radius: 999px;
`;

function ProgressBar() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const max = useSelector((state: RootState) => state.game.quiz.questions.length);
    const now = useSelector((state: RootState) => state.game.currentQuestionIndex)! + 1;

    const percentage = Math.floor(((now - 1) * 100) / max);

    return (
        <Container $theme={theme} role="progressbar">
            <Fill $percentage={percentage}></Fill>
        </Container>
    );
}

export default ProgressBar;
