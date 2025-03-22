import leftArrowImg from '../assets/images/prev.png';

const LeftArrowButton = ({ onClick, onDisable }) => {
    return (
        <img
            src={leftArrowImg}
            alt=""
            onClick={onClick}
            onDisable={onDisable}
            style={{
                width: '34px',
                height: '34px',
                float: 'left',
                marginTop: '220px',
                cursor: 'pointer',
                marginLeft: '16px',
            }}
        />
    );
};

export default LeftArrowButton;
