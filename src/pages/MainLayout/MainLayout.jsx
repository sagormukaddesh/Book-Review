import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <div>
                <Navbar></Navbar>
            </div>

            <div><Outlet></Outlet></div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;