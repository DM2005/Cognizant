import React from 'react'

const officeData = [
  {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=60'
  }
]

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Office Space , at Affordable Range</h1>
      {officeData.map((item) => {
        const colors = []
        if (item.rent <= 60000) {
          colors.push('textRed')
        } else {
          colors.push('textGreen')
        }

        return (
          <div className="card" key={item.name}>
            <img src={item.img} alt="Office Space" className="thumb" />
            <h2>Name: {item.name}</h2>
            <h3 className={colors.join(' ')}>Rent: Rs. {item.rent}</h3>
            <h3>Address: {item.address}</h3>
          </div>
        )
      })}
    </div>
  )
}
