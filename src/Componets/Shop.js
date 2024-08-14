import React from 'react'

const Shop = () => {
    return (
        <>
            <div
                className="container-fluid justify-content-center"
                style={{ marginTop: "90px" }}
            >
                <center>
                    <h1><span style={{color: "orange"}}>Our </span> Product</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
                        quibusdam rem eum?
                    </p>
                </center>
                <div className="container mt-5 p-0">
                    <div className="row mt-5 justify-content-center p-1">
                        <div className="col-12 col-md-12 col-sm-12 col-xl-3 col-lg-3 mt-4 p-1">
                            <div className="card text-center">
                                <img src="IMG/Product-C1.jpg" alt="img" style={{ height: "330px" }} />
                                <div className="card-body card-button">
                                    <h4 className="card-title pt-0">Mango</h4>
                                    <p className="card-text pt-0">Per Kg</p>
                                    <h3 className="card-text pt-0"><b>₹85</b></h3>
                                    <button>
                                        <i className="fa-solid fa-cart-shopping pr-1"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-xl-3 col-lg-3 mt-4 p-1">
                            <div className="card text-center">
                                <img src="IMG/Product-C2.jpg" alt="img" style={{ height: "330px" }} />
                                <div className="card-body card-button">
                                    <h4 className="card-title pt-0">Watermelon</h4>
                                    <p className="card-text pt-0">Per Kg</p>
                                    <h3 className="card-text pt-0"><b>₹70</b></h3>
                                    <button>
                                        <i className="fa-solid fa-cart-shopping pr-1"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-sm-12 col-xl-3 col-lg-3 mt-4 p-1">
                            <div className="card text-center">
                                <img src="IMG/Product-C3.jpg" alt="img" style={{ height: "330px" }} />
                                <div className="card-body card-button">
                                    <h4 className="card-title pt-0">Pineapple</h4>
                                    <p className="card-text pt-0">Per Kg</p>
                                    <h3 className="card-text pt-0"><b>₹95</b></h3>
                                    <button>
                                        <i className="fa-solid fa-cart-shopping pr-1"></i>Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shop;