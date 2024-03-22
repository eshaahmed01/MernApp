import React from 'react'
import Footer from './Footer'

export default function Card(props) {
  const { foodName, options, img } = props;
  const priceOptions = options && options.length > 0 ? Object.keys(options[0]) : [];

  return (
    <div>
         <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title"> {foodName} </h5>
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 options text-black rounded" style={{ select: "#FF0000" }} >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 options text-black rounded" style={{ select: "#FF0000" }} >
             {priceOptions.map((data) =>{
              return <option key={data} value={data}> {data} </option>

             })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
             Total Price
            </div>
          </div>
          
        </div>
      </div>
     
    </div>

  )
}
