import React from 'react'
import { Checkout } from '../components'

function CheckoutPage({ shippingAddress, setShippingAdress }) {
    return (
        <>
            <Checkout shippingAddress={shippingAddress} setShippingAdress={setShippingAdress} />
        </>
    )
}

export default CheckoutPage