import { ButtonHTMLAttributes, FC, ReactElement } from 'react'
import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = (attributes: Props): ReactElement => {
   return <button {...attributes} className={styles.button} />
}