// import "./App.css";

import { useContext, useState } from "react";
import ThemeContext from "./context/ThemeContext";

import NavBar from "./components/NavBar";
import Body from "./components/Body";

function App() {
    const themeContext = useContext(ThemeContext);
    // console.log(themeContext);
    const [theme, setTheme] = useState(themeContext);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavBar />
            <Body />
        </ThemeContext.Provider>
    );
}

export default App;
