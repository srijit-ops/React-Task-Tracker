import React from 'react'

const Modalform = ({ labelText, dataType, holder, addId , mindate}) => (
  <div>
    <label>{labelText}</label>
    <br />
    <input type={dataType} placeholder={holder} className="mt-2 mb-3" id={addId} min={mindate} style={{ width: "100%" }}></input>
  </div>
)


export default Modalform