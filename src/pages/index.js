import React from "react"

export default function Home() {
  return (
    <div>
      <div>
        Hello world!
      </div>
      <button 
      className="snipcart-add-item"
      data-item-id="formal-shoe"
      data-item-price="25"
      data-item-description="good for change"
      data-item-url="/"
      data-item-image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0b2ea20b-6da3-4948-8692-ac5ca5a4964f/lebron-17-low-basketball-shoe-fHcqqM.jpg"
      data-item-name="formal-shoe"
      data-item-custom1-name="Size"
      data-item-custom1-options="8|9[+5]|10[+10]"
      data-item-custom2-name="Info"
      data-item-custom2-type="checkbox"
      > Check Out</button>
  </div>
  )
}
