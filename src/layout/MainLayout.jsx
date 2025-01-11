import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from "react";

const MainLayout = () => {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Accessing context here

    return (
        <div className={darkMode ? "bg-gray-800" : "bg-gray-50"}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;