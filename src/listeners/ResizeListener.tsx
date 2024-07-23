import { setDevice } from "../slices/deviceSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function ResizeListener() {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => dispatch(setDevice());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);

    return null;
}

export default ResizeListener;
