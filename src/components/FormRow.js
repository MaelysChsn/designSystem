import {useState} from "react";
import InputField from "@/components/InputField";

export function FormRow({label, type, value, onChange, _icon, style,placeholder}) {

    const [isActive, setIsActive] = useState(false);
    return (
        <div className={style.form_row}>
            <label>
                {label}
            </label>
            <InputField type={type} style={style} _icon={_icon} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    );
}
