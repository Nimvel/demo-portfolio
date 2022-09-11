import styles from './FormsControls.module.css'

export const FormElement = (Element) => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return <div className={hasError && styles.formControl + ' ' + styles.error} >
        <Element {...input} {...props} />
        <div>
        {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}