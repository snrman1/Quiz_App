import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";
import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type HeaderProps = {
    $theme: Theme;
};

const Header = styled.header<HeaderProps>`
    h1,
    span {
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }

    h1 {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font: var(--f-mobile-heading-l-light);

        & > :last-child {
            font: var(--f-mobile-heading-l-medium);
        }
    }

    h2 {
        font: var(--f-mobile-heading-m-regular-italic);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-600)" : "var(--clr-lt-300)")};
    }

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        & {
            margin-top: 4rem;
        }

        & h1 > :first-child {
            font: var(--f-heading-l-light);
        }

        & h1 > :last-child {
            font: var(--f-heading-l-medium);
        }

        & h2 {
            font: var(--f-body-s);
        }
    }

    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        & {
            margin-top: 0;
        }

        h1 {
            margin-bottom: 3rem;
        }
    }
`;

function HomePageTitle() {
    const theme = useSelector((state: RootState) => state.theme.value);

    return (
        <Header $theme={theme}>
            <h1>
                <span>Welcome to the</span>
                <span>Frontend Quiz!</span>
            </h1>
            <h2>Pick a subject to get started.</h2>
        </Header>
    );
}

export default HomePageTitle;
