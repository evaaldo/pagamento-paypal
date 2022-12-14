import './style.css'
import { useState, useEffect, useRef } from 'react'

const Home = () => {

    const [paid, setPaid] = useState(false)
    const [loaded, setLoaded] = useState(false)

    let paypalRef = useRef()

    const product = {
        price: 65.00,
        description: 'Cabelo e barba'
    }

    useEffect(() => {
        const script = document.createElement('script')
        const id = 'Ae629eqJyvA9eLFtv4wJWAmQ2ggM_IAsnAmTzYUaS0F-wUN3R42khxa9fr1_0-oy9yI2hcWGrrV4ajRH'
        script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

        script.addEventListener('load', () => setLoaded(true))

        document.body.appendChild(script)

        if(loaded) {
            function loadButtonsAndLogicAboutPayment() {
                setTimeout(() => {
                    window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                {
                                    description: product.description,
                                    amount: {
                                        currency_code: 'BRL',
                                        value: product.price
                                    }
                                }
                            ]
                            });
                        },
                        onApprove: async (_,actions) => {
                            const order = await actions.order.capture()

                            setPaid(true)

                            console.log(order)
                        }
                    })
                    .render(paypalRef)
                })
            }
            loadButtonsAndLogicAboutPayment()
        }
    })

    return(
        <>
            {paid ? (<div>
                            <h1 className='pagamento__texto'>Pagamento efetuado!</h1>
                        </div>) : (
                            <div className='pagamento'>
                                <div ref={v => (paypalRef = v)}></div>
                            </div>
                        )}
        </>
    )

}

export default Home
