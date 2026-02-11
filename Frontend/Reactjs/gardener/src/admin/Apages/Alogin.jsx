import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Alogin() {

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("Aid")) {
      navigate("/Dashboard")
    }
  }, [navigate])

  const [form, setform] = useState({
    email: "",
    password: ""
  })

  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitdata = async (e) => {
    e.preventDefault()

    try {
      const { email, password } = form

      if (!email || !password) {
        toast.error("Please fill all fields")
        return
      }

      const res = await axios.get(
        `http://localhost:3000/admin?email=${email}`
      )

      if (res.data.length === 0) {
        toast.error("Email does not match")
        return
      }

      const admin = res.data[0]

      if (admin.password !== password) {
        toast.error("Password does not match")
        return
      }

      localStorage.setItem("Aid", admin.id)
      localStorage.setItem("Aname", admin.name)

      toast.success("Successfully Login")
      navigate("/Dashboard")

    } catch (error) {
      console.error(error)
      toast.error("API error")
    }
  }

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <form onSubmit={submitdata}>
            <MDBCard className="bg-dark text-white my-5 mx-auto"style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className="p-5 d-flex flex-column align-items-center">

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password</p>

                <MDBInput value={form.email} name="email"onChange={getchange} label="Email address"type="email" size="lg"className="mb-4 w-100"/>

                <MDBInput value={form.password} name="password" onChange={getchange} label="Password" type="password"size="lg"className="mb-4 w-100"/>

                <MDBBtn type="submit" outline color="white" size="lg">Login</MDBBtn>

              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Alogin
