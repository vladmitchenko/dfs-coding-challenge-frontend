import { FC, ReactElement, ReactNode } from 'react'
import styles from './ChatMessage.module.scss'

type Props = {
    onClick?: () => void
    children: ReactNode
}

export const ChatMessage: FC<Props> = (props: Props): ReactElement => (
    <div onClick={props.onClick} className={`${styles.chatMessage} ${props.onClick ? styles.clickable : ''}`}>
        <span className={styles.content}>
            {props.children}
        </span>
    </div>
)