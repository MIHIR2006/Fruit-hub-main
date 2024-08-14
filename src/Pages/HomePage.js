import React from 'react'
import Icon_Data from '../Componets/Icon_Data'
import Hero from '../Componets/Hero'
import Shop from '../Componets/Shop'
import Deal from '../Componets/Deal'
import Testimonial from '../Componets/Testimonial'
import Ads from '../Componets/Ads'
import Sale from '../Componets/Sale'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <Icon_Data />
            <Shop />
            <Deal />
            <Testimonial />
            <Ads />
            <Sale />
        </>
    )
}
export default HomePage