import React from 'react'

const Navbar = () => {
  return (
    <nav
    className=
    // { dark ? 
      "navbar bg-dark shadow-sm" 
      // : "navbar bg-light shadow-sm" }
  >
    <div className="container-fluid">
      <span
        className=
        // {dark ? 
          "navbar-brand mb-0 h1 text-light " 
          // : "navbar-brand mb-0 h1" }
      >
        Expense Manager
      </span>
      <span className="navbar-brand mb-0 h1 text-light">
        <button
          className=
          // { dark ? 
          "btn btn-sm btn-outline-light"
              // : "btn btn-sm btn-outline-dark"
          // }
          // onClick={handleTheme}
        >
          {/* {dark  */}
          {/* ? "Light Mode" :  */}
          "Dark Mode"
          {/* //  } */}
        </button>
      </span>
    </div>
  </nav>
  )
}

export default Navbar

// export default Navbar <nav className="navbar bg-dark shadow-sm"  >
// <div className="container-fluid">
  {/* <span
    className="navbar-brand mb-0 h1 text-light" >
    Expense Tracker
  </span>
  <span className="navbar-brand mb-0 h1 text-light">
    <button className="btn btn-sm btn-outline-light" >save</button>
  </span>
</div>
</nav>
{/* container */}
{/* <div className='container'>
{/*            
     {/* main section */}
    //  <div className='main-section '>
    //       <div id='current-bal' className='balance'>
    //           <span>
    //              <p>current Balance</p> */}
    //              <h1>R1000,000</h1>
    //           </span>
    //           <i className='fa-solid fa-wallet'>jay ho</i>
    //       </div>

//           <form className='transaction-form'>
//             <input type='text' placeholder='Enter your transction'/>
             
//           </form>
//         expence section
//           <div id='current-status' className="main-section">
//                 mukulji mangulle
//           </div> */}
        
//         <ul className="list-group">
//            <li className="list-item">
//              <span>
//                  <h3 className="expence-transaction">R1400000</h3>
//                  <h4>BreakFast</h4>
//              </span>
//              <button className="delbtn">
//               <i className="fa-solid fa-trash"> mukul</i>
//               <li className="list-Item">
//                    <span>
//                         <h3 className="income-transaction">R1400</h3>
//                         <h4>Salary</h4>
//                         <button className="delbtn">
//                           <i className="fa-solid fa-trash">DELETE</i>
//                         </button>
//                    </span>
//               </li>
//              </button>
//            </li>
//         </ul>

//      </div>
// </div> 
