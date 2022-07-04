import {useRef, useState, useEffect} from 'react'

const USER_REGEX = new RegExp('[a-zA-Z0-9]');
const PWD_REGEX = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    const pwdRef = useRef();
    const checkRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []) //Focus the useRef on mount. The dependencies are set to empty.

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]) // Reset error message when user has started to type user or pwd.

    function togglePwdVisible(){
        pwdRef.current.type = pwdRef.current.type === 'password' ? 'text' : 'password';
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const valid_user = USER_REGEX.test(user);
        const valid_pwd = PWD_REGEX.test(user);
        // if(!valid_user){
        //     setErrMsg("Invalid Username. Username should be alphanumeric.");
        //     errRef.current.style.color = 'red';
        //     return
        // }

        // if(!valid_pwd){
        //     setErrMsg("Invalid Password.");
        //     errRef.current.style.color = 'red';
        //     return
        // }
        setUser('');
        setPwd('');
        checkRef.current.checked = false;
        setSuccess(true);
    }

    return (
        <section>
            <br/>
            <p ref={errRef} className={errMsg ? "errmsg": 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
			<form onSubmit={handleSubmit} action="" className="m-auto" style={{maxWidth:"600px"}}>
				<hr className="my-4" />
				<div className="form-group mb-3 row"><label htmlFor="username" className="col-md-5 col-form-label">Username:</label>
					<div className="col-md-7"><input type="text" className="form-control form-control-lg" id="username" name="username" type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    required/>
                </div>
                </div>

                <div id='pwd' className="form-group mb-3 row"><label htmlFor="password" className="col-md-5 col-form-label">Password:</label>
					<div className="col-md-7"><input type="password" className="form-control form-control-lg" id="password" name="password"
                    id="password"
                    autoComplete="off"
                    ref={pwdRef}
                    onChange={e => setPwd(e.target.value)}
                    value={pwd}
                    required/>
                    <input ref={checkRef}type="checkbox" id="showpassword" onClick={togglePwdVisible}></input>
                    <label htmlFor="showpassword"> &nbsp;&nbsp;Show Password</label>
                </div>
                <hr className="my-4" />
				<label htmlFor="Register7"></label>
                <div className="Register-btn">
                <button id='rgstr-btn' className="btn btn-primary btn-lg" type="submit">Register</button>
                </div>
                </div>
            </form>
        
        </section>
    )
}

export default Register;
