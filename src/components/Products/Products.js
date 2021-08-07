import React from 'react';

const Products = () => {
    return (
        <section className="px-5 mx-5 pt-4 mb-5">
            <div className="row text-center mx-5">
                <div className="col-sm">
                   <div className="p-5 m-3">
                        <h2>Ready for autumn collection</h2>
                        <p>Treat yourself to some of our brand new autumn collection - all with wonderful colours surrounding you.</p>
                        <button type="button" className="btn rounded-pill btn-outline-dark px-4 fw-bold">PURCHASE NOW</button>
                   </div>
                    <img src="https://i.im.ge/2021/08/07/0QT6G.png" alt="" />
                </div>
                <div className="col-sm">
                    <div className="p-5 m-3">
                        <h2>Ready for autumn collection</h2>
                        <p>Treat yourself to some of our brand new autumn collection - all with wonderful colours surrounding you.</p>
                        <button type="button" className="btn rounded-pill btn-outline-dark px-4 fw-bold">PURCHASE NOW</button>
                   </div>
                    <img src="https://i.im.ge/2021/08/07/0QoVx.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Products;