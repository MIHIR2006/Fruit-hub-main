import React from 'react'

const Deal = () => {
    return (
        <>
            <div
                class="container-fluid justify-content-center"
                style={{ marginTop: "90px" }}
            >
                <center>
                    <h1> Deal Of The <span style={{ color: "orange" }}>Month </span>  </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
                        quibusdam rem eum?
                    </p>
                </center>
                <div class="container mt-3">
                    <div class="row text-center text-lg-left">
                        <div
                            class="col-lg-6 col-md-12 col-sm-12 col-12 img-margin justify-content-start"
                        >
                            <img src="IMG/Product-C4.png" class="img-fluid" alt="Image" />
                        </div>
                        <div
                            class="col-lg-6 col-md-12 col-sm-12 col-12"
                            style={{ marginTop: "100px" }}
                        >
                            <h2>Deal Of The Month</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
                                tincidunt turpis, sed posuere metus euismod ac.
                            </p>
                            <p class="pt-0">Per Kg</p>
                            <h3 class="pt-0"><b>₹15</b></h3>
                            <button to="#" class="buy-button mt-1">
                                <i class="fa-solid fa-cart-shopping pr-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}
export default Deal;
