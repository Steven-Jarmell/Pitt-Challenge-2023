import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Outlet />
            <p className="text-center fixed bottom-0 w-full">Made with ❤️</p>
        </>
    );
};

export default Layout;
