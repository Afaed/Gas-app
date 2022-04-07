import React from 'react';

const Home = () => {
    return (
        <div>
<section id="home">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
                <h1 className="display-4 fw-bolder mb-4 text-center text-white">Pump Plunder</h1>
                <p className="lead text-center fs-4 mb-5 text-white">Running on E? Find a cheap fill with Pump Plunder</p>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-light me-4 round-pill px-4 py-2">Gas Near Me</button>
                    <button className="btn btn-outline-light me-4 round-pill px-4 py-2"></button>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}

export default Home;