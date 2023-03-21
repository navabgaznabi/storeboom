import './button.styles.scss'
const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: "inverted",
};
const ButtonComp = ({ children, buttonType,classes, ...otherProps }) => {
  return (
    <button
      className = { `button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${classes}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
