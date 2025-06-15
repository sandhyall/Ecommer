import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Paypalbutton = ({amount,onSucess,onError}) => {
  return (
    <div>
      <PayPalScriptProvider 
      options={{"client-id":
        import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}>
        <PayPalButtons style={{layout :"vertical"}}
        createOrder={(data,action)=>{
            return action.order.create({
                purchase_units:[{amount:{value:amount}}],
            })
           
        }}
        onApprove={(data,action)=>{
            return action.order.capture().then(onSucess)
        }}
        onError={onError}/>
      </PayPalScriptProvider>
    </div>
  )
}

export default Paypalbutton