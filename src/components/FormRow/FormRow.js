import {useState} from "react";
import InputField from "@/components/InputField/InputField";
import style from '@/components/FormRow/FormRow.module.css'

export function FormRow({label, type, value, onChange, _icon, placeholder, isError, errorMessage}) {
    const [isActive, setIsActive] = useState(false);
    return (<section className={style.form_row}>
        <div className={style.form_row}>
            <label className={"text_legend"}>
                {label}
            </label>
            <InputField type={type}
                        _icon={_icon} value={value} onChange={onChange}
                        placeholder={placeholder} isError={isError}/>
        </div>
        {isError && <p className={style.error_message}>{errorMessage}</p>}
    </section>);
}