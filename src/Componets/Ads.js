import React from 'react'

const Ads = () => {
    return (
        <>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-6">
                        <div class="embed-responsive embed-responsive-16by9">
                            <video
                                controls
                                muted
                                class="embed-responsive-item"
                                src="IMG/Fruit Project_1080p.mp4"
                                allowfullscreen
                            ></video>
                        </div>
                    </div>
                    <div class="col-lg-6 pt-3">
                        <h1>We Are<span style={{ color: "orange" }} > Fruit's </span></h1>
                        <p>
                        Welcome to our Fresh Fruit Hub, where nature's vibrant palette comes alive in a symphony of flavors and colors! Immerse yourself in a world of luscious fruits that are not just a feast for the eyes but a celebration for your taste buds. From the succulent sweetness of ripe mangoes to the crisp juiciness of apples, each fruit is a testament to the bountiful wonders of the Earth. Our carefully curated selection boasts the freshest picks,simply savoring nature's candy, our Fresh Fruit Hub is your gateway to a world where every bite is a burst of vitality. Join us in embracing the natural goodness that only the finest fruits can offer, and let your culinary adventures thrive with freshness!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ads;