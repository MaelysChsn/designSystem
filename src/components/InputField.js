import {useState} from "react";
import {jsx} from "react/jsx-runtime";

function InputField({label, type, value, onChange, _icon, style, placeholder, isError}) {
    if (type === "password") {
        _icon = "Eye-closed.svg";
    }

    const [isActive, setIsActive] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [icon, setIcon] = useState(_icon);

    function onClick() {
        setIsActive(true);
    }

    function offClick() {
        setIsActive(false);
    }

    function hiddenPassword() {
        setHidden(!hidden);
        changeIconPassword()
    }

    function changeIconPassword() {
        if (icon === "Eye-closed.svg") {
            setIcon('Eye-opened.svg');
        } else {
            setIcon('Eye-closed.svg');
        }
    }

    if (type === "password") {
        return (<div
            className={`${style.input_icon_container} ${style.input_container} ${isActive ? style.input_icon_container_focus : ''}  ${isError ? style.error : ''}`}>
            {icon && <img src={icon} alt="icon" onClick={hiddenPassword}/>}
            <input placeholder={placeholder} type={hidden ? 'password' : 'text'} value={value} onChange={onChange}
                   onClick={setIsActive} onBlur={offClick}/>
        </div>);
    } else {
        return (<div
            className=
                {`
                    ${style.input_icon_container} 
                    ${style.input_container} 
                    ${isActive ? style.input_icon_container_focus : ''} 
                    ${isError ? style.error : ''}`
                }>
            {icon && <img src={icon} alt="icon"/>}
            <input placeholder={placeholder} type={type} value={value}
                   onChange={onChange} onClick={onClick}
                   onBlur={offClick}/>
        </div>);
    }
}

export default InputField;