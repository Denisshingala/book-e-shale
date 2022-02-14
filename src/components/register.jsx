import '../css/registration.css';

const Register = () => {
    return (
        <>
            <div className="body-container">
                <div className="path">Home &gt; <span className='current-path'>Create an Account</span> </div>
                <div className="title text-center">Login or Create an Account</div>
                <form className="form3 row g-3">
                    <p className='left-title m-0'>Personal Information</p>
                    <hr />
                    <p style={{ fontSize: "15px", color: "#838383", fontWeight: "300", marginBottom: "20px", marginTop: "0%" }}>Please enter the following information to creating your account.</p>
                    <div className="col-md-6 my-0">
                        <label for="fname" className="form-label">First Name</label><br />
                        <input type="text" className="form-input" name="fname" />
                    </div>
                    <div className="col-md-6 my-0">
                        <label for="lname" className="form-label">Last Name</label><br />
                        <input type="text" className="form-input" name="lname" />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "40px" }}>
                        <label for="email" className="form-label">Email Adress</label><br />
                        <input type="email" className="form-input" name="email" />
                    </div>
                    <p className='left-title' style={{ marginTop: "70px" }}>Login Information</p>
                    <hr className='m-0' />
                    <div className="col-md-6">
                        <label for="password" className="form-label">Password</label><br />
                        <input type="password" className="form-input" name="password" />
                    </div>
                    <div className="col-md-6">
                        <label for="cpassword" className="form-label">Confirm Password</label><br />
                        <input type="password" className="form-input" name="cpassword" />
                    </div>
                    <div className="col-md-12">
                        <button type='submit' className="form3-button">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register