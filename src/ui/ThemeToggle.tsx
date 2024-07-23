import { useDispatch, useSelector } from "react-redux";
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";
import { toggleTheme } from "../slices/themeSlice";
import { RootState } from "../redux/store";
import { Form } from "react-bootstrap";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;

    & > form {
        padding: 0 0.75em;
    }
`;

const StyledSwitch = styled(Form)`
    & .form-check-input:checked,
    & .form-check-input {
        background-color: var(--clr-accent);
        border-color: var(--clr-accent);
    }

    & .form-switch .form-check-input {
        width: 2rem;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

    & .form-check-input {
        height: 1.25rem;
    }

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        & .form-switch .form-check-input {
            width: 3rem;
        }

        & .form-check-input {
            height: 1.75rem;
        }
    }

    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        margin: 2rem 0;
    }
`;

function ThemeToggle() {
    const iconTheme = useSelector((state: RootState) => state.theme.value) === "light" ? "dark" : "light";
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleTheme());

    return (
        <Container>
            <div>
                <img src={`icon-sun-${iconTheme}.svg`} alt="light theme" />
            </div>
            <StyledSwitch>
                <Form.Switch type="switch" onClick={handleToggle} />
            </StyledSwitch>
            <div>
                <img src={`icon-moon-${iconTheme}.svg`} alt="dark theme" />
            </div>
        </Container>
    );
}

export default ThemeToggle;
