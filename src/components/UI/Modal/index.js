import Card from "../Card";
import Button from "../Button";

import styles from "./index.module.scss";

const Modal = (props) => {

    const onClose = () => {
        props.onClose();
    }

    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2 className='text-black'>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p className='text-black'>
                        {props.message}
                    </p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onClose}
                            className='text-black border-2 p-2 rounded border-black'>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Modal;