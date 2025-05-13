import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                {/* <Link to="/admin/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إدارة الطلبات
                    </div>
                </Link> */}
                <Link to="/admin/products" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إدارة المنتجات
                    </div>
                </Link>
                <Link to="/admin/categories" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إدارة التصنيفات
                    </div>
                </Link>
                <Link to="/admin/brands" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إدارة الماركات
                    </div>
                </Link>
                {/* <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إضف ماركة
                    </div>
                </Link>
                <Link
                    to="/admin/addcategory"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إضف تصنيف
                    </div>
                </Link>
                <Link
                    to="/admin/addsubcategory"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إضف تصنيف فرعي
                    </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text border-bottom p-3 mx-auto text-center">
                        إضف منتج
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default Sidebar;
