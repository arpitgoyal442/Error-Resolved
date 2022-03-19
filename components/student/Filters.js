import React from 'react'

const Filters = ({status, setStatus}) => {
  return (
    <div className='studentFilters'>
      <select className='studentFilters__dropdown' name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="1">All</option>
        <option value="2">Pending</option>
        <option value="3">Unresolved</option>
        <option value="4">Resolved</option>
      </select>
    </div>
  )
}

export default Filters
