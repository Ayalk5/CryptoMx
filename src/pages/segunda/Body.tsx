

function Body() {


    return (
    
      <div className="container contenedor col-10 mb-3">
      <a className="navbar-brand mt-2 mb-1" href="#">
        <img src="https://raw.githubusercontent.com/Ayalk5/CryptoMx/main/Liquid%20Staking%20Protocol%20Negrp%404x-8.png"  width="600px" height="auto" alt="Logo"/>
      </a>      
      <div className="row col-6  rounded-3 bg-dark-subtle ">
        
          <div className="row align-items-center" >
            <div className="row">
             <div className="col"><h6>Total in Protocol</h6></div> 
              <div className="col">Rewards</div>
              <div className="col">Ends in</div>
            </div>
            <div className="row">
              <div className="col"><h6>10.00</h6></div>
              <div className="col"><h6>1.000</h6></div>
              <div className="col"><h6>6d 45min</h6></div>
            </div>
            <div className="row">
              <div className="col"><h6>mxVARA</h6></div>
              <div className="col"><h6>mxVARA</h6></div>
              <div className="col"><h6></h6></div>
            </div>
          </div>
      </div>
      <div className="row col-6  rounded-3 ">
        
        <div className="row m-2" >
          <div className="row">
           <div className="col"><h6>00000</h6></div> 
            <div className="col">mxVARA</div>
            <div className="col rounded-3 bg-dark-subtle">Claim Prize</div>
          </div>


        </div>
    </div>


      <div className="row col-6">
        <div className="col"><div className="accordion" id="accordionExample">
         
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                My Balance
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                
                <div className="row mt-4 mb-4 ">
                  <div className="col-5"><span className="">Banlance in Protocol </span></div>
                  
                  <div className="col-3">mxVara</div>
                </div>
                <div className="row align-content-lg-centers  bg-secondary-subtle rounded-3 mb-2" id="alineacion">
   
                </div>
 
              
                <div className="row  bg-secondary-subtle rounded-3 mb-2 align-items-center"  >
                  <div className="col-6">mxVara</div>

                  <div className="col-2">max</div>
                </div>
                <div className="row bg-secondary-subtle rounded-3 mt-3 align-items-center">
                  <div className="col">Balance VARA</div>
 </div>
                <div className="row text-center">
                  <div className="col mt-4"><button type="submit" className="btn btn-primary">Deposit</button></div>
                  <div className="col mt-4"><button type="submit" className="btn btn-primary">With Draw</button></div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>


    )
    
}

export { Body };