import { FC, ReactElement, ReactNode, useState } from 'react'
import { Button } from '../Button';
import styles from './ChatWrapper.module.scss';

type Props = {
    buttonText: string
    render: (onClose: () => void) => ReactNode
}

export const ChatWrapper: FC<Props> = (props: Props): ReactElement => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen(val => !val)

    return (
        <div className={styles.chatWrapper}>
            {!isOpen ? (
                <Button onClick={toggleIsOpen}>{props.buttonText}</Button>
            ) : props.render(toggleIsOpen)}
        </div>
    )
}