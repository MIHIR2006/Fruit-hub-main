import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section>
                <center class="mt-5">
                    <h1><span style={{ color: "orange" }}>Our </span> Testimonial</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut
                        quibusdam rem eum?
                    </p>
                </center>
                <div class="container-fluid" style={{ backgroundColor: "rgb(237, 234, 222)" }}>
                    <div class="container mt-5 p-3">
                        <div class="row">
                            {/* <!-- Card 1 --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{backgroundColor: "rgb(252, 245, 229)"}}
                                >
                                    <img
                                        src="IMG/Card_1.jpg"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">AUSAR</h5>
                                        <p class="card-text">
                                            Ausar is a rapper and singer from Chicago’s South Side and
                                            South Suburbs. He fell in love with music at a young age,
                                            initially gaining inspiration from the gospel. With cosigns
                                            from Lupe Fiasco, 9th Wonder, Rakim, and a premiere on
                                            Netflix’s Rhythm + Flow — Ausar's performed and worked
                                            alongside Wyclef 9th Wonder, Rakim, and a premiere on Jean.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 2 --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{ backgroundColor: "rgb(252, 245, 229)" }}
                                >
                                    <img
                                        src="IMG/Card_2.jpg"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">SAGE</h5>
                                        <p class="card-text">
                                            Sage is a cross disciplinary artist from Louisiana based in
                                            Los Angeles. His background in performance and dance fuels
                                            his passion for visual narratives that move people from the
                                            inside out. Drawing from his southern roots and love of
                                            fantasy, Jamal loves creating worlds that defy the
                                            limitations of reality and allow the characters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card 3  --> */}
                            <div class="col-12 col-md-12 col-sm-12 col-xl-4 col-lg-4 mt-2">
                                <div
                                    class="card card-data"
                                    style={{ backgroundColor: "rgb(252, 245, 229)" }}
                                >
                                    <img
                                        src="IMG/Card_3.png"
                                        class="card-img-top card-img-center"
                                        alt="Center Image"
                                        style={{ height: "330px" }}
                                    />
                                    <div class="card-body">
                                        <h5 class="card-title">JAMAL WADE</h5>
                                        <p class="card-text">
                                            Jamal is a cross disciplinary artist from Louisiana based in
                                            Los Angeles. His background in performance and dance fuels
                                            his passion for visual narratives that move people from the
                                            inside out. Drawing from his southern roots and love of
                                            fantasy, Jamal loves creating worlds that defy the
                                            limitations of reality and allow the characters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;