import MainNavbar from '../components/MainNavbar';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router';

export default function AdminLayout() {
    return (
        <>
            <MainNavbar />
            <Outlet />
            <Footer />
        </>
    );
}
