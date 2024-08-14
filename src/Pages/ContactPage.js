import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div class="container-fluid bg-dark">
                <div
                    class="container text-center align-content-center About-part pt-5"
                    style={{ height: "35vh" }}
                >
                    <h2 className='pt-4'>Contact</h2>
                </div>
            </div>

            <div class="container-fluid bg-style pb-5" style={{ backgroundColor: "rgba(255, 186, 58, 0.815)" }}>
                <div class="container pt-4">
                    <div class="row">
                        <div class="col-lg-4">
                            <img
                                src="IMG/Product-C10-removebg-preview.png"
                                alt="Contact Image"
                                class="img-fluid"
                                style={{ height: "100%" }}
                            />
                        </div>
                        <div class="col-lg-8 mt-5">
                            <div class="contact-form">
                                <h2 class="text-left">Contact Us</h2>
                                <form>
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <textarea
                                            class="form-control"
                                            rows="5"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" class="btnc-partc col-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactPage