import styles from './button.module.css'

const Button = ({
  buttonText, 
  type = "button",
  onClick
}) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      <span className={styles.buttonText}>{buttonText}</span>
    </button>
  );
};

export default Button;