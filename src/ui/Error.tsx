import { Theme } from "../types/themeTypes";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type ErrorMessageProps = {
    $theme: Theme;
};

const ErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;

    & img {
        width: 32px;
        height: 32px;
    }
`;

const ErrorMessage = styled.span<ErrorMessageProps>`
    color: ${props => (props.$theme === "light" ? "var(--clr-wrong)" : "var(--clr-white)")};
    font: var(--f-mobile-body-regular);
`;

function Error() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const errorMessage = useSelector((state: RootState) => state.game.errorMessage);

    return (
        <ErrorWrapper>
            <div>
                <img src="icon-error.svg" alt="error icon" />
            </div>
            <ErrorMessage $theme={theme}>{errorMessage}</ErrorMessage>
        </ErrorWrapper>
    );
}

export default Error;
