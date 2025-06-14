import React, { useState } from 'react'


const countriesList = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'Germany', 'France', 'Japan', 'China', 'Brazil', 'Russia', 'Italy',
  'South Korea', 'Spain', 'Mexico', 'Indonesia', 'Netherlands', 'Switzerland'
];

const ApplaySearch = () => {

    const [search,setSearch]=useState("")


    const filteredCountries= countriesList.filter(country=>
        country.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <input type="text" placeholder='search country' value={search} onChange={e=>setSearch(e.target.value)} />

      <ul>
        {filteredCountries.length> 0? (
          filteredCountries.map((country,index)=>(
            <li key={index}>{country}</li>
          ))
        ):(
            <li>No country found</li>
        )}
      </ul>
    </div>
  )
}

export default ApplaySearch 
