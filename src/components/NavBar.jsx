import { useContext } from "react";
import Moon from "../assets/Moon.jsx";
import Sun from "../assets/Sun.jsx";

import themeContext from "../context/ThemeContext.jsx";

const NavBar = () => {
    const { theme, setTheme } = useContext(themeContext);

    const themeToggler = () => {
        // console.log("clicked");
        if (theme === "light") {
            // console.log("inside light");
            // theme = "dark";
            setTheme("dark");
        } else {
            // theme = "light";
            setTheme("light");
            // console.log("inside dark");
        }
    };
    return (
        <div
            className={`flex justify-between px-12 py-5 ${
                theme === "light" ? "bg-gray-50" : "bg-black text-white"
            } sticky top-0 `}
        >
            <div>LOGO</div>
            <div className="flex gap-x-10">
                <div>
                    <ul className="flex gap-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* <div> */}
                <button onClick={themeToggler}>
                    {theme === "light" ? <Moon /> : <Sun />}
                </button>
                {/* </div> */}
                <div>user logo</div>
            </div>
        </div>
    );
};

export default NavBar;
