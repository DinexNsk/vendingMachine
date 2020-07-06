import React from 'react';

import styles from './FormInput.module.scss';

interface FormInputProps {
    labelText: string,
    onSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled: boolean,
    additionalLabelText?: string | false
}

export const FormInput = ({
    labelText,
    onSubmit,
    disabled,
    additionalLabelText,
}: FormInputProps) => {
    return (
        <>
            <label className={styles.form__label}>
                <div>{labelText}</div>
                {additionalLabelText && <div>{additionalLabelText}</div>}
            </label>
            <div className={styles.form__inputContainer}>
                <input
                    autoComplete='off'
                    className={styles.form__input}
                    onKeyDown={onSubmit}
                    disabled={disabled}
                />
            </div>
        </>
    )
}
