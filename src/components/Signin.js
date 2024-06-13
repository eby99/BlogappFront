import axios from 'axios'
import React, { useState } from 'react'

const Signin = () => {
    const [data, setData] = useState(
        {
            "name":"",
            "email":"",
            "passwd":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/login", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert(" Registered")
                }
                else {
                    alert("Not Registered")
                }
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <div className="container1-fluid">
                <h2> New Project </h2>

                <img class="img-fluid"
                    src="https://wallpapercave.com/wp/wp2939867.png" width="100%" />

                <div className="container1">
                    <div className="row g-3">
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6 ">
                            <label htmlFor="" className="label form-label">Enter Email Id</label>
                            <input type="text" className="form-control" placeholder='email' name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Enter Password</label>
                            <input type="password" className="form-control" placeholder='password'  name='passwd' value={data.passwd} onChange={inputHandler}/>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-danger" onClick={readValue}>Register</button>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <a href='/Register'> Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signin