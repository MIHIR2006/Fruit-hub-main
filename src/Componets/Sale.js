import React from 'react'

const Sale = () => {
    return (
        <>
            <section>
                <center class="mt-5 pt-2">
                    <h1><span style={{ color: "orange" }}>Sale! </span>Is On</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
                        quibusdam rem eum?
                    </p>
                </center>
                <div class="container-fluid mt-3">
                    <div class="row pb-4">
                        <div class="col-12 col-lg-6">
                            <img src="IMG/Part-2.jpg" style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div class="col-12 col-lg-6 ad-part text-center mt-5">
                            <h2>
                                December sale is on! with big
                                <span style={{ fontWeight: "900", fontSize: "2.5rem", color: "orange" }}>
                                    Discount....</span>
                            </h2>
                            <p>
                                Sale! uo to <br />
                                50%
                            </p>
                            <button class="buy-button">
                                <i class="fa-solid fa-cart-shopping pr-1"></i>BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Sale;