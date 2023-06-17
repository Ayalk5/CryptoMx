import { LocalBalanceToken } from "./LocalBalanceToken";
import { Mint } from "./Mint";

function Body() {


    return (
    
      <div className="container contenedor col-10">
      <a className="navbar-brand mt-2 mb-1" href="#">
        <img src="https://raw.githubusercontent.com/Ayalk5/CryptoMx/main/Liquid%20Staking%20Protocol%20Negrp%404x-8.png"  width="600px" height="auto" alt="Logo"/>
      </a>
      
      
      
      <div className="row col-6  rounded-3 bg-dark-subtle ">
        
          <div className="row" >
            <div className="row">
             <div className="col"><h6>APY</h6></div> 
              <div className="col">≈ 20.0%</div>
            </div>
            <div className="row">
              <div className="col"><h6>Exchange Rate</h6></div>
              <div className="col"><h6>1:1</h6></div>
            </div>
            
          </div>
      </div>
      <div className="row col-6">
        <div className="col"><div className="accordion" id="accordionExample">
 
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Stake
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  <div className="col">Amount</div>
                  <div className="col align-content-lg-end">Available: 0 VARA</div>
                </div>
                <div className="row mt-4 mb-4 ">
                  <div className="col-1"><span className=""><img alt="DOT" src="https://somoscryptomx.com/wp-content/uploads/2021/11/cropped-Favicon-180x180.png" width="35" height="35"/></span></div>
                 <p></p>
                  <div className="col-2">Max</div>
                </div>
                <div className="row align-content-lg-centers  bg-secondary-subtle rounded-3 mb-2" id="alineacion">

                </div>
                <div className="row  mb-2" id="alineacion">

                  
                </div>

                <div className="row  bg-secondary-subtle rounded-3 mb-2"  >
                  <div className="col">Platform Fee</div>
                  <div className="col align-self-end">3%</div>
                </div>
                <div className="row bg-secondary-subtle rounded-3 mt-3">
                  <div className="col">Receive</div>
                  <div className="col">0 mxVARA</div>
                </div>
                <div className="row text-center">
                  <div className="col mt-4"><button type="submit" className="btn btn-primary">Stake</button></div>
                  
                </div>
              </div>
            </div>
          </div>


          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Unstake
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                  <div className="col">Amount</div>
                  <div className="col align-content-lg-end">Available: 0 mxVARA</div>
                </div>
                <div className="row  mt-4 mb-4">
                  <div className="col-1"><span className=""><img alt="DOT"  src="https://somoscryptomx.com/wp-content/uploads/2021/11/cropped-Favicon-180x180.png" width="35" height="35" /></span></div>
                  <div className="col-9"><p></p></div>
                  <div className="col-2">Max</div>
                </div>
                <div className="row">
                  <div className="col"> <LocalBalanceToken/></div>
                    <div className="row">
                      <div className="col"><p></p></div>
                        <div className="row">
                          <div className="col">

                        </div>
                    </div>
                    
                </div>
                <div className="row bg-secondary-subtle  rounded-3 mt-3 m-lg-auto">
                  <div className="col">Receive</div>
                  <div className="col">0 VARA</div>
                </div>


                <div className="row text-center mt-4">
                  <div className="col"><button type="submit" className="btn btn-primary">Unstake</button></div>
                  
                </div>
                
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