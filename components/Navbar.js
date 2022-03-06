// import React from 'react'


function Navbar() {
  return (
    <div className='navbar'>

      <h3> <span><del>ERROR:</del> </span>RESOLVED</h3>

      <div className='filter'>
        {/* <select className="form-select" aria-label="Default select example">
          <option selected>Topic</option>
          <option value="1">JAVA</option>
          <option value="2">c++</option>
          <option value="3">c</option>
        </select> */}
        
        {/* <select className="form-select" aria-label="Default select example">
          <option selected>Difficulty</option>
          <option value="1">Easy</option>
          <option value="2">Medium</option>
          <option value="3">Hard</option>
        </select>

        <select className="form-select" aria-label="Default select example">
          <option selected>Language</option>
          <option value="1">English</option>
          <option value="2">Hindi</option>
          <option value="3">Hinglish</option>
        </select> */}
        
        
      </div>


      <div className="navbarIcons">
      <span className="iconify-inline" data-icon="clarity:notification-solid" data-width="30" data-height="30"  style={{color:'gold'}}></span>
        <img src="./profile_img.jpeg" alt="njn" />
        <span className="iconify-inline power" data-icon="fontisto:power" data-width="30" data-height="30"></span>
      </div>


    </div>
  )
}

export default Navbar