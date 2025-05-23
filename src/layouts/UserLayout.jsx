import Footer from '../sections/Footer';
import { Outlet } from 'react-router';
import Header from '../sections/Header';

export default function UserLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
