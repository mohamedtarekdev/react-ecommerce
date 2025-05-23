const SectionTitle = ({ title, tag }) => {
    return (
        <div className="section-title-wrapper-4 mb-40">
            <span className="section-subtitle-4 for-grocery mb-10">{tag}</span>
            <h2 className="section-title-4">{title}</h2>
        </div>
    );
};

export default SectionTitle;
