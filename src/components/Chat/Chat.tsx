import { FC, ReactElement, ReactNode } from 'react'
import styles from './Chat.module.scss';

type Props = {
    title?: string
    onClose?: () => void
    loading?: boolean
    loadingText?: string
    children: ReactNode
}

export const Chat: FC<Props> = ({
    title = 'Chat',
    loading = false,
    loadingText = 'Loading...',
    onClose,
    children,
}: Props): ReactElement => {
    return (
        <div className={styles.chat}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <button className={styles.close} onClick={onClose}>×</button>
            </div>
            {loading ? (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p className={styles.loadingText}>{loadingText}</p>
                </div>
            ) : (<div className={styles.messages}>
                {children}
            </div>)}
        </div>
    )
}