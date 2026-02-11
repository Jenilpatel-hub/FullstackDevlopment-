import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Apages from '../Acoman/Apages'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function ServiceAdd() {

  const redirect = useNavigate()

    const [service, setservice] = useState({
        id: "",
        name: "",
        img: "",
        logo: "",
        desc: ""
    })

    const getchage = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(service)
    }

    const submitedSer = async (e) => {
        e.preventDefault();

        if(service.name == "" || service.img == "" || service.logo == "" || service.desc == ""){
            console.log("pls field data..");
            toast.error('pls field data..')
            return false;
        }

        const res = await axios.post("http://localhost:3000/Services", service)
        redirect("/serviceMange")
        setservice({
            id: "",
            name: "",
            img: "",
            logo: "",
            desc: ""
        })
        toast.success('service add succssfully');
    }

  return (
    <div>
        <Aheader />
        <Apages title="Serviceadd" data="Serviceadd"  />
        
    </div>
  )
}

export default ServiceAdd