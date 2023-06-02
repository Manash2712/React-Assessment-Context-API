import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Body = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={`${
                theme === "light" ? "bg-white" : "bg-slate-800 text-white"
            } h-screen`}
        >
            <p className="font-bold text-5xl">Body</p>
        </div>
    );
};

export default Body;
