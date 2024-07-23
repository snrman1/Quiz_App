import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";

function ThemeListener() {
    const theme = useSelector((state: RootState) => state.theme.value);

    useEffect(() => {
        const root = document.documentElement;
        const body = document.querySelector("body")!;

        if (theme === "light") {
            body.classList.add("body-light");
            body.classList.remove("body-dark");
            root.style.setProperty("--shadow", "0 16px 40px 0 rgba(143, 160, 193, 14%)");
        } else {
            body.classList.remove("body-light");
            body.classList.add("body-dark");
            root.style.setProperty("--shadow", "0 16px 40px 0 rgba(49, 62, 81, 14%)");
        }
    }, [theme]);

    return null;
}

export default ThemeListener;
