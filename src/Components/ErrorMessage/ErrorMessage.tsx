import styles from './ErrorMessage.module.scss'

interface Props {
message:string
}

const ErrorMessage = function ({message}:Props){
return <div className={styles.ErrorMessage}>{message}</div>
}

export default ErrorMessage