import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <main>

<h2 class="dash-title">Overview</h2>

<div class="dash-cards">
    <div class="card-single">
        <div class="card-body">
            
            <div>
                <h5>SELL</h5>
               

            </div>
        </div>
            <div class="card-footer">
                <a>See Details</a>
            </div>   
    </div>

    

</div>

</main>
            </div>
        </section>
    );
};

export default Dashboard;