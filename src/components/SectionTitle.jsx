import React from 'react';
import { Link } from 'react-router';

const SectionTitle = ({ title, btnValue, path }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="section-title">{title}</div>
            {btnValue && (
                <Link to={path} className="text-decoration-none">
                    <div className="section-btn">{btnValue}</div>
                </Link>
            )}
        </div>
    );
};

export default SectionTitle;
