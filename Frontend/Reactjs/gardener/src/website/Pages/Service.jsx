import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Pages from '../Coman/Pages'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Service() {

      const [Service, setservice] = useState([])

  useEffect(() => {
    fetchdata()

  }, [])


  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Services")
    // console.log(res.data)
    setservice(res.data)
  }
    return (
        <div>
            <Header />
            <Pages title="Service" data="Service" />
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
                        <p className="fs-5 fw-bold text-primary">Our Services</p>
                        <h1 className="display-5 mb-5">Services That We Offer For You</h1>
                    </div>
                    <div className="row g-4">
                       {
                        Service && Service.map((data,index)=>{
                            return(
                                 <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded d-flex h-100">
                                <div className="service-img rounded">
                                    <img className="img-fluid" src={data.image} alt />
                                </div>
                                <div className="service-text rounded p-5">
                                    <div className="btn-square rounded-circle mx-auto mb-3">
                                        <img className="img-fluid" src={data.logo} alt="Icon" />
                                    </div>
                                    <h4 className="mb-3">{data.name }</h4>
                                    <p className="mb-4">{data.des}</p>
                                    <a className="btn btn-sm" href><i className="fa fa-plus text-primary me-2" />Read More</a>
                                </div>
                            </div>
                        </div>
                            )
                        })
                       }
                      
                    </div>
                </div>
            </div>
            {/* Service End */}
            <Footer />

        </div>
    )
}

export default Service