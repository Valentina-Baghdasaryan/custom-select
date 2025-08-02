import styles from "./ErrorMessage.module.scss";

interface Props {
  message: string;
}

const ErrorMessage = function ({ message }: Props) {
  return (
    <div className={styles.ErrorMessage} role="alert">
      {message}
    </div>
  );
};

export default ErrorMessage;
