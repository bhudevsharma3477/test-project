import React from "react";

const Register = () => {
    return(
        <>
        <div className="register">
            <div className="container">
                <form action="">
                    <label htmlFor="name">name</label>
                    <input type="text" />
                    <label htmlFor="">e-mail</label>
                    <input type="email" />
                    <label htmlFor="">password</label>
                    <input type="password" />
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;