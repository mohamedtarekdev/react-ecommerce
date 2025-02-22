import React from 'react';

const SectionTitle = ({ title, btnValue }) => {
    return (
        <div className="d-flex justify-content-between pt-4">
            <div className="section-title">{title}</div>
            {btnValue && <div className="section-btn">{btnValue}</div>}
        </div>
    );
};

export default SectionTitle;
