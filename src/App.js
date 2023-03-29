import { useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { GlobalStyle } from "./styles";

function App() {
    const [can, setCan] = useState("normal");
    return (
        <>
            <GlobalStyle />
            <Header canColor={can} />
            <Main activeCan={can} setParentCan={setCan} />
        </>
    );
}

export default App;
