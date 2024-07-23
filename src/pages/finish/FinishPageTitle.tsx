import { TABLET_BREAKPOINT } from "../../config/config";
import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type TitleProps = {
    $theme: Theme;
};

const Title = styled.h1<TitleProps>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    font: var(--f-mobile-heading-l-light);

    & :last-child {
        font: var(--f-mobile-heading-l-medium);
    }

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        :first-child {
            font: var(--f-heading-l-light);
        }

        :last-child {
            font: var(--f-heading-l-medium);
        }
    }
`;

function FinishPageTitle() {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <Title $theme={theme}>
            <span>Quiz completed</span>
            <span>You scored...</span>
        </Title>
    );
}

export default FinishPageTitle;
