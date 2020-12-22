import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { graphql, useStaticQuery } from 'gatsby'


const stripePromise = loadStripe("pk_test_51HdYRxI6zT8Hhm7wldmYsJaY4ulFgkmhjeIpee6Xio9ewDMR2013sPH1jnqeuU4niBln6ClD7pkI9qsTpFgymKmC00M5nu1llP")

function Products({location}) {
    const data = useStaticQuery(
        graphql`
        query ProductPrices {
            prices : allStripePrice {
                edges {
                    node {
                        id
                        active
                        currency
                        unit_amount
                        product {
                            id
                            images
                            name
                            description
                        }
                    }
                }
            }
        }
        `
    )
    console.log("stripe data", data)
    /* const redirectToCheckout = async (id) => {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          mode: "payment",
          lineItems: [{price: id, quantity: 1}],
          successUrl: `${location.origin}/payment-success/`,
          cancelUrl: `${location.origin}/payment-error/`,
        })
      } */
    return (
        <div>
            {data.prices.edges.map(node => (
                <div key={node.node.id}>
                    <div> Product Name: {node.node.product.name}</div>
                    <div> Product Price : {node.node.unit_amount}</div>
                    <div><img src={node.node.product.images[0]} width="200"/></div>
                    {/* <button onClick={()=>{
                        redirectToCheckout(node.node.id)
                    }}> */}
                     <button 
                        className="snipcart-add-item"
                        data-item-id={node.node.id}
                        data-item-price={node.node.unit_amount}
                        data-item-description={node.node.product.description}
                        data-item-url="https://gatsby-snipcart-shopping-s02-app.netlify.app/products"
                        data-item-image={node.node.product.images[0]}
                        data-item-name={node.node.product.name}                        
                        data-item-custom2-name="Info"
                        data-item-custom2-type="checkbox"
                        > Add To Cart </button>
                </div>
            ))}
            
        </div>
    )
}

export default Products
