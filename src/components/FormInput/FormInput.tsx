import React from 'react';

import styles from './FormInput.module.scss';

interface FormInputProps {
    labelText: string,
    onSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled: boolean,
    additionalLabelText?: string | false,
    name?: string,
    defaultLabel?: string,
}

export const FormInput = ({
    labelText,
    onSubmit,
    disabled,
    additionalLabelText,
    name,
    defaultLabel = '',
}: FormInputProps) => {
    return (
        <>
            <label className={styles.form__label}>
                <div>{labelText || defaultLabel}</div>
                {additionalLabelText && <div>{additionalLabelText}</div>}
            </label>
            <div className={styles.form__inputContainer}>
                <input
                    autoComplete='off'
                    className={styles.form__input}
                    onKeyDown={onSubmit}
                    disabled={disabled}
                    name={name}
                />
            </div>
        </>
    )
}
