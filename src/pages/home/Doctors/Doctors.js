import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Details from '../details/Details';
import Doctor from '../Doctor/Doctor';
import loaddata from './../../../fakedata/Fakedata.json'
import './Doctors.css'

const Doctors = () => {
    const [doctor,setDoctor]=useState([]);
    


    useEffect( () => {

    setDoctor(loaddata);
    }
    ,[])
    return (
        <Row id='doctors' xs={1} md={2} className="g-4 m-3">
            {
                
                doctor.map(data => <Doctor
                key ={data.key}
                doctor={data}
                ></Doctor>)
            }
            
        </Row>
    );
};

export default Doctors;