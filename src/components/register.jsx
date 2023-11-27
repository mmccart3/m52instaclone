import { writecookie } from "../utils/utilities";

function Register(props) {
    async function sendRegisterToBackEnd(email, password, setLoggedIn) {
        try {
            const response = await fetch(
                "http://localhost:5001/registerUser",
                {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )
            const data = await response.json();
            console.log(data.token);
            writecookie("jwt_token",data.token,7);
            setLoggedIn(true);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendRegisterToBackEnd(props.email, props.password, props.setLoggedIn)
    }
     console.log(props.email)
    return (
        <div>
            <hr/>
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <label for="email">Enter your email</label>
                <input className="emailbox" type="text" id="email" required onChange = {(event) => props.setEmail(event.target.value)}></input>
                <br></br>
                <label for="password">Enter your new password</label>
                <input className="passwordbox" type="text" id="password" required onChange = {(event) => props.setPassword(event.target.value)}></input>
                <br></br>
                <input type="submit" />
            </form>
            <hr/>
        </div>
    )
};

export default Register;