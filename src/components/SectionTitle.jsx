import React from 'react';
import { Link } from 'react-router';

const SectionTitle = ({ title, tag }) => {
    return (
        <div class="section-title-wrapper-4 mb-40">
            <span class="section-subtitle-4 for-grocery mb-10">{tag}</span>
            <h2 class="section-title-4">{title}</h2>
        </div>
    );
};

export default SectionTitle;
