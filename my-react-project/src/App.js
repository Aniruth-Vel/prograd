import logo from './logo.svg';
import CompHeader from './components/comp.js'
import './App.css';

function App() {
  return(
    <div className="App">
      <CompHeader />
        <p style={{"text-align": "center","font-size":"20px"}}><b>PROJECTS AND EXPERIENCE</b></p>
        <div className="mid">
            <div>
                <h4 style={{"text-align": "center"}}>SHOP MAX</h4>
                <h5>Online e-commerce website.</h5>
                <h5>Developed with HTML/CSS in the front end and used PHP in the
                    backend.</h5>
                <h5> Allows users to browse for their favourite products, compare the
                    prices and places order.</h5>

            </div>
            <div>
                <h4 style={{"text-align": "center"}}>PIZZA EMPIRE</h4>
                <h5>Online Pizza ordering website.</h5>
                <h5>Developed using HTML/CSS in the front end and used django in
                    the backend.</h5>
                <h5>Allows users to search for their desired pizzas, add toppings,
                    displays menu, navigates to billing and places order.</h5><br/>
            </div>
            <div>
            <h4 style={{"text-align": "center"}}>CERTIFICATIONS</h4>
                <h5>Certification on AWS free tier services from MaanavanLearnCode.</h5>
                <h5>Certification on PHP from HomeOfProgramming.</h5>
                <h5>Cerification on Basic Linux Commands from MaanavanLearnCode.
                </h5>
            </div>
            
        </div>
        <div className="row3">
            <div className="pers">
                <h3 style={{"text-align": "center","font-size":"20px"}}>PERSONAL DETAILS</h3>
                <p>Email:aniruthvelanand@gmail.com</p>
                <p>Phone:9443857340</p>
                <p>DOB:15.01.2003</p>
                <p>Degree:B.E CSE(Final year)</p>
                <p>Location:Chennai</p>  
            </div>
            <div className="ski">
            <h3 style={{"text-align": "center","font-size":"20px"}}>SKILLS</h3>
                <li>Python</li><br/>
                <li>C++</li><br/>
                <li>Django</li><br/>
                <li>PHP</li><br/>
                <li>SQL</li><br/>
            </div>
        </div>
    </div>
  );
}

export default App;
