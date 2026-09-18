import "./Landing.css";
// import { useState } from "react";

const Landing = () => {
  // const [isLogedIn, setIsLogedIn] = useState(false);
  // const [showLogedIn , setShowLogedIn] = useState(false);
  return (
    <>
      <section className="hero">
        {/* <!-- Centered content block --> */}
        <div className="hero-content">
          <p className="hero-subtitle">* THE STORY OF THE KING OF POP *</p>

          <h1 className="hero-title">
            <span>MICHAEL</span>
            <span>JACKSON</span>
          </h1>


          <div className="hero-dates">
                <p>Born August 29, 1958, Gary, Indiana,</p>
                <p>Died June 25, 2009, Los Angeles, California</p>
            </div>
            

          {/* {isLogedIn ? (
            <>
            <div className="button-container">
              <h1 className="status-title">Welcome User</h1>
              <button 
              onClick={()=>setIsLogedIn(false)} 
              className="btn btn-secondary">Log-Out</button>
            </div>
            </>
          ) :showLogedIn ? (
            // Login Page
            <>
            <div className="login-card">
              <h1 className="login-title">Welcome User</h1>

              <input className="login-input" type="email" placeholder="Enter Email" />

              <input className="login-input" type="Password" placeholder="Enter Password" />

              <button onClick={()=>setIsLogedIn(true)} className="btn btn-primary login-btn">Login</button>
            </div>

            </>
          ) : (
            <>
            <div className="button-container">
            <h1 className="status-title">Please Login First</h1>
            <button 
            onClick={()=>setShowLogedIn(true)} 
            className="btn btn-primary">Log-In</button>
            </div>
            </>
            
          )} */}


        </div>



        {/* -- Bottom-pinned horizontal chapters carousel -- */}

        <div className="hero-chapters">
          <div className="chapter-item">
            <img
              src="/Intro-chapt1.webp"
              alt="Chapter 1"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/hero-image-chapt3.webp"
              alt="Chapter 2"
            />
            <span>Chapter 02</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 3"
            />
            <span>Chapter 03</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 4"
            />
            <span>Chapter 04</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 5"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 6"
            />
            <span>Chapter 01</span>
          </div>    
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 7"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 8"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 9"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 9"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 9"
            />
            <span>Chapter 01</span>
          </div>
          <div className="chapter-item">
            <img
              src="/group_right_3.webp"
              alt="Chapter 9"
            />
            <span>Chapter 01</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
