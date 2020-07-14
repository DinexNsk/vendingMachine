import React from 'react';

import styles from './FormInput.module.scss';

interface FormInputProps {
    labelText: string,
    onSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled: boolean,
    additionalLabelText?: string | false,
    name?: string,
    defaultLabel?: string,
    value?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const FormInput = ({
    labelText,
    onSubmit,
    disabled,
    additionalLabelText,
    name,
    defaultLabel = '',
    value,
    onChange,
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
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
