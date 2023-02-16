import {useState} from "react";
import InputField from "src/components/InputField";
import {FormRow} from "src/components/FormRow";

function LoginForm({style}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sigin, setSigin] = useState(true);
    const [isError, setIsError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsError(true);
        console.log("toto");
        // Do something with email and password
    };

    return (
        <div className={style.login_container}>
            <div className={style.login_header}>
                <h1>{sigin ? "Sign in" : "Sign up"}</h1>
                <div className={style.register_container}>
                    <h2> {sigin ? "Not signed up ?" : "Already got an account"}</h2>
                    <button className={`${style.btn_header} ${style.btn_outline_secondary} ${style.btn}`}
                            onClick={() => setSigin(!sigin)}>{sigin ? "Register" : "Sign in"}</button>
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
                    <button className={`${style.btn_primary} ${style.btn}`}
                            type="submit" onSubmit={handleSubmit}> {sigin ? "Sign in" : "Register"}</button>
                    {
                        sigin ? <p className='underline'>Forget password ?</p> : null
                    }
                </div>

            </form>
        </div>
    );
}


export default LoginForm;