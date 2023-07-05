import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios"
export const Homepage = () => {
    const [data, setdata] = useState("");
    const getdata = async () => {
        const response = await Axios.get("http://localhost:4000/courses")
        setdata(response.data)
        console.log(response.data)
    }
    useEffect(() => {
        getdata()
    }, []);
    return (
        <>
            <section className="main-section">
                <div className="main-section-content">
                    <h1 className="main-section-heading">Learning is the Key to Success</h1>
                    <div className="main-section-quote">
                        <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."</p>
                    </div>
                    <div className="main-section-search">
                        <input type="text" placeholder="Search for courses" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="main-section-image">
                    <img src="https://oncampus.sjny.edu/wp-content/uploads/2017/12/tips-for-studying.jpg" alt="Study Tips" />
                </div>
            </section>
            <section className="stream-section">
                <div className="stream-section-heading">
                    <h2>Explore Different Streams</h2>
                </div>
                <div className="stream-cards-container" to="/course">
                    {
                        Object.keys(data).map(key => (
                            <Link key={key} className="stream-card">
                                <img src={data[key].image} alt={data[key].name} />
                                <div className="stream-card-content">
                                    <h3 className="stream-card-title">{data[key].name}</h3>
                                    <p className="stream-card-description">{data[key].desc}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </section>

        </>
    );
}
