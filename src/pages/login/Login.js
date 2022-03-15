import React from 'react';
import ss from './login.module.css';

export default function Login() {

 

  return (

    <div className="container h-100 main">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-10">
          <div className="row">
            <div className="col-6 d-none d-lg-block">
              <img src="/assets/login-bg-2.jpg" alt="logo" className={`${ss.login_banner} w-100 h-100`}></img>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <div className={`${ss.login_container} text-center w-100`}>
                <h2 className="mt-2 text-balck fw-bold">Login</h2>

                <form className=" form mt-5">
                  {/* form unputs */}
                  <div className="mt-5">
                    <span className="input-wrapper bg-white py-3 px-3 rounded">
                      <span><i className="bi bi-person-bounding-box me-1 text-warning"></i></span>
                      <input type="email" placeholder="Email" className={`${ss.login_input} border-0`} name="email" required></input>
                    </span>
                  </div>
                  <div className="mt-5">
                    <span className="input-wrapper bg-white py-3 px-3 rounded">
                      <span><i className="bi bi-lock-fill me-1 text-warning"></i></span>


                      <input type="password" placeholder="Password" className={`${ss.login_input} border-0`} name="password" required></input>
                    </span>
                  </div>

                  {/* forget password */}
                  <div className="mt-4 d-flex justify-content-center">
                    <div className="d-flex justify-content-between" style={{ width: "280px" }}>
                      <div className="text-black">
                        <input type="checkbox" className="me-2" id="remember"></input>
                        <label htmlFor="remember">Remember me</label>
                      </div>

                    </div>
                  </div>
                  {/* login button */}
                  <div className="mt-5">
                    <button className="px-5 py-2 rounded bg-warning text-white fw-bold border-0">Login</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}



