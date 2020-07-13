import React, { forwardRef } from 'react';

import styles from './FormInput.module.scss';

interface FormInputProps {
    labelText: string,
    onSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled: boolean,
    additionalLabelText?: string | false,
    name?: string,
    defaultLabel?: string,
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
    labelText,
    onSubmit,
    disabled,
    additionalLabelText,
    name,
    defaultLabel = '',
}, ref) => {
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
                    ref={ref}
                />
            </div>
        </>
    )
})
