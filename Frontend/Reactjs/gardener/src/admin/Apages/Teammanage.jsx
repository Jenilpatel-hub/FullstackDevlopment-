import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import axios from 'axios'

function Teammanage() {


    // all product get
    const [team, setteam] = useState([])


        const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/team")
        setteam(res.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])  


    // single team data
    const [data, setdata] = useState({
        id: "",
        name: "",
        qualitiy: "",
        img: ""
    })

    // single team fetch
    const singleteam = async (id) => {
        const res = await axios.get(`http://localhost:3000/team/${id}`)
        setdata(res.data)
    }

    // delete team fetch
    const deleteteam = async (id) => {
        await axios.delete(`http://localhost:3000/team/${id}`)
        fetchdata()
    }

    return (
        <div>
            <Aheader />
            <Apages title="Team Management" data="Team" />

            <div className="container">
                <table className="table my-5">
                    <thead>
                        <tr className='text-center'>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Quality</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            team && team.map((data, index) => (
                                <tr key={data.id} className='text-center'>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.qualitiy}</td>
                                    <td>
                                        <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => singleteam(data.id)}>View </button>
                                        <button className="btn btn-success mx-2">Edit</button>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteteam(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* Modal */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item rounded">
                        <img className="img-fluid" style={{ height: "500px", width: "500px" }} src={data.img} alt />
                        <div className="team-text">
                            <h4 className="mb-0">{data.name}</h4>
                            <p className="text-primary">{data.qualitiy} </p>
                            <div className="team-social d-flex">
                                <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-square rounded-circle me-2" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Teammanage
