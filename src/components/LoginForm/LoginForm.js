import {useState} from "react";
import {FormRow} from "@/components/FormRow/FormRow";
import style from '@/components/LoginForm/LoginForm.module.css'
import ButtonField from "@/components/ButtonField/ButtonField";
import styleButton from '@/components/ButtonField/ButtonField.module.css'

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sigin, setSigin] = useState(true);
    const [isError, setIsError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsError(true);
        // Do something with email and password
    };

    return (
        <div className={style.login_container}>
            <div className={style.login_header}>
                <h1 className={"text_title_1"}>{sigin ? "Sign in" : "Sign up"}</h1>
                <div className={style.register_container}>
                    <h2  className={"text_subtitle"}> {sigin ? "Not signed up ?" : "Already got an account"}</h2>
                    <ButtonField
                        classNames={`${style.btn_header} ${styleButton.btn_outline_secondary} ${styleButton.btn}`}
                        label={sigin ? "Register" : "Sign in"}
                        onClick={() => setSigin(!sigin)}
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit} className={style.form_section}>
                <div className={style.form_container}>
                    <FormRow
                        isError={isError}
                        errorMessage={"Nom d'utilisateur ou mot de passe incorrect"}
                        style={style}
                        label="Email"
                        type="email"
                        value={email}
                        placeholder="Your email"
                        onChange={(event) => setEmail(event.target.value)
                        }
                        icon="Eye-closed.svg"
                    />
                    <FormRow
                        isError={isError}
                        errorMessage={"mot de passe incorrect"}
                        style={style}
                        label="Password"
                        type="password"
                        value={password}
                        placeholder="Your password"
                        onChange={(event) => setPassword(event.target.value)}
                        icon="Eye-opened.svg"
                    />
                </div>
                <div className={style.form_container}>
                    <ButtonField
                        classNames={`${styleButton.btn} ${styleButton.btn_primary} `}
                        label={sigin ? "Sign in" : "Register"}
                        onClick={() => setSigin(!sigin)}
                    />
                    {
                        sigin ? <p className='underline'>Forget password ?</p> : null
                    }
                </div>

            </form>
        </div>
    );
}


export default LoginForm;