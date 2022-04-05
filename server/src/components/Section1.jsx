import React from 'react';

const sectionOne = () => {
    return (
        <div>
            <section id="sectionone">
                <div className="container my-5 py-5">
                    <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/gas.jpg" alt="Gas" className="w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">Text</h3>
                            <h1 className="display-6 mb-2">Text <b>Goes</b> Here</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Testing what text looks like</p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Test</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Test</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
export default sectionOne;