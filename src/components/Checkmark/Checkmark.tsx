import React from 'react';

import styles from './Checkmark.module.scss'

export default function Checkmark() {
    return (
        <span className={styles.checkmark}>
            <div className={styles.checkmark__circle}></div>
            <div className={styles.checkmark__stem}></div>
            <div className={styles.checkmark__kick}></div>
        </span>
    )
}
