import React from 'react'

const Modalform = ({ labelText, dataType, holder, addId }) => (
  <div>
    <label>{labelText}</label>
    <br />
    <input type={dataType} placeholder={holder} className="mt-2 mb-3" id={addId} style={{ width: "100%" }}></input>
  </div>
)


export default Modalform