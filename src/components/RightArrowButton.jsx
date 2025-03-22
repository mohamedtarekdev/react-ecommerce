import rightArrowImg from '../assets/images/next.png';

const RightArrowButton = (onClick) => {
    return (
        <img
            src={rightArrowImg}
            alt="Right Arrow"
            onClick={onClick}
            style={{
                width: '34px',
                height: '34px',
                float: 'right',
                marginTop: '220px',
                cursor: 'pointer',
                marginRight: '16px',
            }}
        />
    );
};

export default RightArrowButton;
