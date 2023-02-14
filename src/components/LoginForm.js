import {useState} from "react";
import InputField from "src/components/InputField";
import {FormRow} from "src/components/FormRow";

function LoginForm({style}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sigin, setSigin] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with email and password
    };

    return (
        <div className={style.login_container}>
            <div className={style.login_header}>
                <h1>{sigin ? "Sign in" : "Sign up"}</h1>
                <div className={style.register_container}>
                    <h2> not signed up ?</h2>
                    <button className={`${style.btn_header} ${style.btn_outline_secondary} ${style.btn}`}
                            onClick={() => setSigin(!sigin)}>{sigin ? "Register" : "Sign in"}</button>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={style.form_container}>
                <FormRow
                    style={style}
                    label="Email:"
                    type="email"
                    value={email}
                    placeholder="Your email"
                    onChange={(event) => setEmail(event.target.value)
                    }
                    icon="Eye-closed.svg"
                />
                <FormRow
                    style={style}
                    label="Password:"
                    type="password"
                    value={password}
                    placeholder="Your password"
                    onChange={(event) => setPassword(event.target.value)}
                    icon="Eye-opened.svg"
                />
                <button className={`${style.btn_primary} ${style.btn}`} type="submit"> {sigin ? "Sign in" : "Register"}</button>
            </form>
        </div>
    );
}


export default LoginForm;