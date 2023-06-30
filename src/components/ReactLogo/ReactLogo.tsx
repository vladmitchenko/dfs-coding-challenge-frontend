import { FC, ReactElement } from 'react'
import logo from './logo.svg'
import styles from './ReactLogo.module.scss';

export const ReactLogo: FC = (): ReactElement => {
   return (
    <img src={logo} className={styles.reactLogo} alt="logo" />
   )
}