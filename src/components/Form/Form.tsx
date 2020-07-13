import React, { forwardRef } from 'react';
import styles from './Form.module.scss'
import { FormInput } from '../FormInput/FormInput';

interface FormProps {
    bonusText?: string,
    onSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void,
    labelText: string,
    disabled: boolean,
    additionalLabelText?: string | false,
    name?: string,
    defaultLabel?: string,
}

export const Form = forwardRef<HTMLInputElement, FormProps>(({
    bonusText,
    onSubmit,
    labelText,
    disabled,
    additionalLabelText,
    name,
    defaultLabel,
}, ref) => {
    return (
        <div className={styles.form}>   
            <FormInput 
                onSubmit={onSubmit}
                labelText={labelText} 
                disabled={disabled} 
                additionalLabelText={additionalLabelText}
                name={name}
                defaultLabel={defaultLabel}
                ref={ref}
            />
            {bonusText && <div className={styles.form__bonusText}>{bonusText}</div>}
        </div>
    )
})
