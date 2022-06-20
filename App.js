import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar ,Nav , Container, Alert, Form,ListGroup, Card} from 'react-bootstrap'


function App() {

  
  
  return (
    <div>
      

    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home" >Form.com</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
    

      </Nav>
    </Container>
    </Navbar>
    <Alert variant="primary">Welcome to our form , You must complete all questions ! </Alert>
  
    <Card className='red' style={{ width: '100rem' }}>
     <Container>
  <ListGroup variant="flush">
<ListGroup.Item>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">- Email Address :</Form.Label>
        <Form.Control type="email" placeholder="Example@email.com" />
        <Form.Text className="text-muted"> Trust us!</Form.Text>
      </Form.Group>
    </ListGroup.Item>
    <ListGroup.Item>
     
      <Form.Group>
        <Form.Label>
         - Full name :
        </Form.Label>
        <Form.Control type="name" placeholder="Anna Martinez" />
        <Form.Text>*Obligatoire</Form.Text>
      </Form.Group>
 
  <br/>
  <br/>
  </ListGroup.Item>
  <ListGroup.Item>

    <p> - Country :</p>
<Form.Select aria-label="Default select example">
  <option>Select your country...</option>
    <option value="1"> Afghanistan	</option>
    <option value="2"> Albania	</option>
    <option value="3"> 	Algeria	</option>
    <option value="4"> Andorra	</option>
    <option value="5">  Angola	</option>
    <option value="6"> Antigua and Barbuda	</option>
    <option value="7"> Argentina	</option>
    <option value="8"> Armenia	</option>
    <option value="9"> Australia	</option>
    <option value="10"> Austria	</option>
    <option value="11"> Azerbaijan	</option>
    <option value="12"> 	Bahamas	</option>
    <option value="13"> Bahrain	</option>
    <option value="14"> Bangladesh	</option>
    <option value="15"> Barbados	</option>
    <option value="16"> Belarus	</option>
    <option value="17"> Belgium	</option>
    <option value="18"> Benin	</option>
    <option value="19"> 	Bolivia	</option>
    <option value="20"> Bosnia and Herzegovina	</option>
    <option value="21"> 	Botswana	</option>
    <option value="22"> Brazil </option>
    <option value="23"> Brunei	</option>
    <option value="24">	Bulgaria	</option>
    <option value="25"> Burkina Faso	</option>
    <option value="26"> 	Burundi	</option>
    <option value="27"> 	Côte d'Ivoire	</option>
    <option value="28"> Cabo Verde	</option>
    <option value="29"> Cambodia	</option>
    <option value="30"> Cameroon	</option>
    <option value="31">Canada	</option>
    <option value="32"> Central African Republic	</option>
    <option value="33"> Chad	</option>
    <option value="34"> Chile	</option>
    <option value="35"> China	</option>
    <option value="36"> Colombia	</option>
    <option value="37"> Comoros	</option>
    <option value="38"> Congo (Congo-Brazzaville)	</option>
    <option value="39"> Costa Rica	</option>
    <option value="40"> Croatia	</option>
    <option value="41"> Cuba	</option>
    <option value="42"> Cyprus	</option>
    <option value="43"> Czechia (Czech Republic)	</option>
    <option value="44"> Democratic Republic of the Congo	</option>
    <option value="45"> Denmark	</option>
    <option value="46"> Dominica	</option>
    <option value="47"> Dominican Republic	</option>
    <option value="48"> Ecuador	</option>
    <option value="49"> Egypt	</option>
    <option value="59"> El Salvador	</option>
    <option value="60"> Equatorial Guinea	</option>
    <option value="61"> Eritrea	</option>
    <option value="62"> Estonia	</option>
    <option value="63"> Eswatinia </option>
    <option value="64"> Ethiopia	</option>
    <option value="65"> Fiji	</option>
    <option value="66"> Finland </option> 
    <option value="67"> France</option>
    <option value="68"> Gabon	</option>
    <option value="69"> Gambia	</option>
    <option value="70"> Georgia	</option>
    <option value="71"> Germany	</option>
    <option value="72"> Ghana	</option>
    <option value="73"> Greece	</option>
    <option value="74"> Grenada	</option>
    <option value="75"> Guatemala	</option>
    <option value="76"> Guinea	</option>
    <option value="77"> Guyana	</option>
    <option value="78"> Haiti	</option>
    <option value="79"> Holy See	</option>
    <option value="80"> Honduras	</option>
    <option value="81"> Hungary	</option>
    <option value="82"> 	Iceland	</option>
    <option value="83"> India	</option>
    <option value="84"> Indonesia	</option>
    <option value="85"> Iran	</option>
    <option value="86"> Iraq	</option>
    <option value="87"> Ireland	</option>
    <option value="88"> Italy	</option>
    <option value="89"> Japan	</option>
    <option value="90">  Jordan	</option>
    <option value="91"> Kazakhstan	</option>
    <option value="92"> Kenya	</option>
    <option value="93"> 	Kiribati	</option>
    <option value="94"> Kuwait	</option>
    <option value="95">  Kyrgyzstan	</option>
    <option value="96"> Laos	</option>
    <option value="97">	Latvia	</option>
    <option value="98"> Lebanon	</option>
    <option value="99"> 	Lesotho	</option>
    <option value="100"> Liberia	</option>
    <option value="101">    Libya	</option>
    <option value="102"> Liechtenstein	</option>
    <option value="103"> Lithuania	</option>
    <option value="104"> Luxembourg	</option>
    <option value="105"> Madagascar	</option>
    <option value="106"> Malawi	</option>
    <option value="107"> Malaysia	</option>
    <option value="108"> Maldives	</option>
    <option value="109"> Mali	</option>
    <option value="110"> Malta	</option>
    <option value="111"> Marshall Islands	</option>
    <option value="112"> Mauritania</option>
    <option value="113"> Mauritius	</option>
    <option value="114"> Mexico	</option>
    <option value="115"> Micronesia	</option>
    <option value="116"> Moldova	</option>
    <option value="117"> Monaco	</option>
    <option value="118"> Mongolia	</option>
    <option value="119"> Montenegro	</option>
    <option value="120"> Morocco	</option>
    <option value="121"> Mozambique	</option>
    <option value="122"> Myanmar </option>
    <option value="123"> Namibia	</option>
    <option value="124"> Nauru	</option>
    <option value="125"> Nepal	</option>
    <option value="126"> Netherlands	</option>
    <option value="127"> New Zealand</option>
    <option value="128"> Nicaragua	</option>
    <option value="129"> Niger	</option>
    <option value="130"> Nigeria	</option>
    <option value="131"> North Korea</option>	
    <option value="132"> North Macedonia</option>
    <option value="133"> Norway	</option>
    <option value="134"> Oman	</option>
    <option value="135"> Pakistan
    <option value="136"> Palau	</option>
    <option value="137"> Palestine State	</option>
    <option value="138"> Panama	</option>
    <option value="139"> Papua New Guinea	</option>
    <option value="140"> Paraguay	</option>
    <option value="141"> Peru	</option>
    <option value="142"> Poland</option>
    <option value="143"> Portugal	</option>
    <option value="144"> Qatar	</option>
    <option value="145"> Romania	</option>
    <option value="146"> Russia	</option>
    <option value="147"> Rwanda</option>
    <option value="148"> Saint Lucia	</option>
    <option value="149"> Saint Vincent and the Grenadines	</option>
    <option value="150"> Samoa	</option>
    <option value="151"> 	San Marino	</option>
    <option value="152"> 	Sao Tome and Principe	</option>
    <option value="153"> Saudi Arabia	</option>
    <option value="154"> Senegal	</option>
    <option value="155"> Serbia	</option>
    <option value="156"> Seychelles	</option>
    <option value="157"> Sierra Leone	</option>
    <option value="158"> Singapore	</option>
    <option value="159"> Slovakia	</option>
    <option value="160">Slovenia	</option>
    <option value="161">	South Sudan	</option>
    <option value="162"> Spain</option>
    <option value="163"> Sri Lanka	</option>
    <option value="164"> Sudan </option>
    <option value="165"> Suriname	</option>
    <option value="166"> Sweden	</option>
    <option value="167"> Switzerland	</option>
    <option value="168"> Syria	</option>
    <option value="169"> </option>Tajikistan	</option>
    <option value="170"> Tanzania </option>
    <option value="171"> Thailand	</option>
    <option value="172"> Timor-Leste	</option>
    <option value="173"> Togo</option>
    <option value="174"> Tonga	</option>
    <option value="175"> Trinidad </option>
    <option value="176"> Tunisia	</option>
    <option value="177"> Turkey	</option>
    <option value="178"> Turkmenistan	</option>
    <option value="179"> Tuvalu	</option>
    <option value="180"> Uganda</option>
    <option value="181"> Ukraine	</option>
    <option value="182"> 	United Arab Emirates	</option>
    <option value="183">United Kingdom	</option>
    <option value="184"> United States of America	</option>
    <option value="185"> Uruguay	</option>
    <option value="186"> Uzbekistan	</option>
    <option value="187">  Vanuatu	</option>
    <option value="188"> 	Venezuela	</option>
    <option value="189"> Vietnam</option>
    <option value="190"> Yemen	</option>
    <option value="191"> 	Zambia	</option>
    <option value="192"> Zimbabwe</option>
  </Form.Select>
  </ListGroup.Item>
  <ListGroup.Item>
  <Form.Label>
    <br/>
  - Gender :
  </Form.Label>
  <Form.Select aria-label="Default select example">
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>



    </Form.Select>
  
  </ListGroup.Item>


     <br/>
      <button type="Submit"   class="btn btn-success">Submit</button>
      </ListGroup>
      
      </Container>
      </Card>
    
    
  </div>
  )
  }
  export default App;