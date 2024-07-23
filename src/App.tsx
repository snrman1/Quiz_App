import { Status } from "./types/gameTypes";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";

import ResizeListener from "./listeners/ResizeListener";
import ThemeListener from "./listeners/ThemeListener";
import FinishPage from "./pages/finish/FinishPage";
import GlobalStyles from "./styles/GlobalStyles";
import QuizPage from "./pages/quiz/QuizPage";
import HomePage from "./pages/home/HomePage";
import Backdrop from "./ui/Backdrop";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const gameStatus = useSelector((state: RootState) => state.game.status);

    return (
        <>
            <GlobalStyles />
            <ResizeListener />
            <ThemeListener />
            <Backdrop />
            {gameStatus === Status.Idle && <HomePage />}
            {(gameStatus === Status.Active || gameStatus === Status.Submitting) && <QuizPage />}
            {gameStatus === Status.Finished && <FinishPage />}
        </>
    );
}

export default App;
