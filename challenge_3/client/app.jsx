class Form1 extends React.Component  {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.renderForm2 = this.renderForm2.bind(this);
  }


  state = this.initialState;

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    //this.setState(this.initialState);

  }

  renderForm2 = () => {
    this.submitForm();
    this.props.handleForm2()
    console.log('renderForm2')
  }
render () {
  if (!this.props.isFalse){
    return null;
  }
  //const {name, job} = this.state;
return (
  <div>
<Form2 handleSubmit={()=>{this.props.handleSubmit}} handleChange={this.handleChange}
submitForm={this.submitForm} isFalse={this.state.isFalse} handleForm2={this.handleForm2}
handleForm3={this.props.handleForm3} isFalse2={this.props.isFalse2} isFalse3={this.props.isFalse3}
handleForm4={this.props.handleForm4} isFalse4={this.props.isFalse4} state={this.props.state}/>
  <form>
    <label>Name</label>
    <input
      type='text'
      name='name'
      id='name'
      //value={name}
      onChange={(e) => this.handleChange(e)}
    />
    <br></br>
    <label>email</label>
    <input
      type='text'
      name='email'
      id='email'
      // value={email}
      onChange={(e) => this.handleChange(e)}
    />
    <br></br>
    <label>password</label>
    <input
      type='text'
      name='password'
      id='password'
      // value={password}
      onChange={(e) => this.handleChange(e)}
    />
    <input type="button" value="Next" onClick={() => this.renderForm2() } />
  </form>
  </div>
  //   {/* F1 collects name, email, and password for account creation. */}
)
}
}
class Form2 extends React.Component  {
  constructor (props) {
    super(props)
    this.renderForm3 = this.renderForm3.bind(this);
  }


  state = this.initialState;

  renderForm3 = () => {
    this.props.submitForm();
    this.props.handleForm3()
    console.log('renderForm3')
  }

render () {
  if (!this.props.isFalse2){
    return null;
  }
  //const {name, job} = this.state;
return (
  <div>
    <Form3 handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}
submitForm={this.props.submitForm} isFalse={this.props.isFalse} handleForm3={this.props.handleForm3}
isFalse3={this.props.isFalse3} handleForm4={this.props.handleForm4} isFalse4={this.props.isFalse4}
state={this.props.state}/>
  <form>
    <label>Address1</label>
    <input
      type='text'
      name='Address1'
      id='Address1'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>Address2</label>
    <input
      type='text'
      name='Address2'
      id='Address2'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>City</label>
    <input
      type='text'
      name='City'
      id='City'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>State</label>
    <input
      type='text'
      name='State'
      id='State'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>zipcode</label>
    <input
      type='text'
      name='zipcode'
      id='zipcode'
      onChange={(e) => this.props.handleChange(e)}
    />
    <input type="button" value="Next" onClick={() => {this.renderForm3()}} />
  </form>
  </div>
  //ine 1, line 2, city, state, zip code) and phone number
)
}
}

class Form3 extends React.Component  {
  constructor (props) {
    super(props)
    this.renderForm4 = this.renderForm4.bind(this);
  }


  state = this.initialState;

  renderForm4 = () => {
    this.props.submitForm();
    this.props.handleForm4();

  }

render () {
  if (!this.props.isFalse3){
    return null;
  }

return (
  <div>
    <Form4 handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}
submitForm={this.props.submitForm} isFalse={this.props.isFalse} handleForm3={this.props.handleForm3}
isFalse3={this.props.isFalse3} handleForm4={this.props.handleForm4} isFalse4={this.props.isFalse4}
state={this.props.state}/>
  <form>
    <label>cardNo.</label>
    <input
      type='text'
      name='cardNo'
      id='cardNo'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>expirationDate</label>
    <input
      type='text'
      name='expirationDate'
      id='expirationDate'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>cvv</label>
    <input
      type='text'
      name='cvv'
      id='cvv'
      onChange={(e) => this.props.handleChange(e)}
    />
    <br></br>
    <label>billingZipCode</label>
    <input
      type='text'
      name='billingZipCode'
      id='billingZipCode'
      onChange={(e) => this.props.handleChange(e)}
    />

    <input type="button" value="Next" onClick={() => this.renderForm4()} />
  </form>
  </div>
  //credit card #, expiry date, CVV, and billing zip code
)
}
}

class Form4 extends React.Component  {
  constructor (props) {
    super(props)
  }


  state = this.initialState;

render () {
  if (!this.props.isFalse4) {
    return null;
  }

return (
  <div>
    {/*console.log(this.props.state[this.props.state.length-1].name)*/}
  <form>

    <label>Confirm Your Info</label>
    <br></br>
{/* {`Name:${this.state.characters[this.state.characters.length-1].name} Name:${} Name:${} Name:${} Name:${} Name:${} Name:${} Name:${} Name:${} Name:${} Name:${}
`} */} {/*Name: + {this.state.characters[this.state.characters.length-1].name}*/}
 Name: {this.props.state[this.props.state.length-1].name} <br></br>
 Email: {this.props.state[this.props.state.length-1].email}<br></br>
 Password: {this.props.state[this.props.state.length-1].password}<br></br>
 Address1: {this.props.state[this.props.state.length-1].Address1}<br></br>
 Address2: {this.props.state[this.props.state.length-1].Address2}<br></br>
 City: {this.props.state[this.props.state.length-1].City}<br></br>
 zipcode: {this.props.state[this.props.state.length-1].zipcode}<br></br>
 cardNo.: {this.props.state[this.props.state.length-1].cardNo}<br></br>
 Expiration Date: {this.props.state[this.props.state.length-1].expirationDate}<br></br>
 CVV: {this.props.state[this.props.state.length-1].cvv}<br></br>
 Billing-ZipCode: {this.props.state[this.props.state.length-1].billingZipCode}
    <br></br>
{/* {1 collects name, email, and password for account creation.
F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
F3 collects credit card #, expiry date, CVV, and billing zip code.} */}
    <input type="button" value="Purchase" onClick={this.props.submitForm} />
  </form>
  </div>
  //credit card #, expiry date, CVV, and billing zip code
)
}
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
      isFalse: false,
      isFalse2: false,
      isFalse3: false,
      isFalse4: false,
      characters: []
    }
    // this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForm2 = this.handleForm2.bind(this);
    this.handleForm3 = this.handleForm3.bind(this);
    this.handleForm4 = this.handleForm4.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(char) {
    // event.preventDefault();
    this.setState({characters: [...this.state.characters, char]})
  }

  handleClick(){

    this.setState({isFalse: !this.state.isFalse, isDisabled: !this.state.isDisabled})
  }

  handleForm2(){
    this.setState({isFalse2: !this.state.isFalse2})
    console.log('APP handleForm2')
  }

  handleForm3(){
    this.setState({isFalse3: !this.state.isFalse3})
    console.log('APP handleForm3')
  }

  handleForm4(){
    this.setState({isFalse4: !this.state.isFalse4})
  }

  render() {

    return (
      <div>
      {/* <form /*onSubmit={this.handleSubmit}*/ }
      <Form1 handleSubmit={this.handleSubmit} isFalse={this.state.isFalse} click={this.handleClick}
      handleForm2={this.handleForm2} handleForm3={this.handleForm3} isFalse2={this.state.isFalse2}
      isFalse3={this.state.isFalse3} handleForm4={this.handleForm4} isFalse4={this.state.isFalse4}
      state={this.state.characters}/>


        <input type='submit' value="Checkout" onClick={this.handleClick} disabled={this.state.isDisabled} />

          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}

      {/* </form> */}

      </div>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById('app'));


// class App extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       fullName: '',
//       email: '',
//       password: '',
//     }
//     this.handleSubmit.bind(this);
//     this.handleInputChange.bind(this);
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   handleInputChange (e) => {
//     e.preventDefault();
//     this.setState({
//       //e.target.name works for all inputs
//       [e.target.name]: e.target.value
//     })
//   }
//     // this.handleChange = this.handleChange.bind(this);
//     // this.state = {
//     //   // "DataSource" is some global data source
//     //   comments: DataSource.getComments()
//     // };



//   // componentDidMount() {
//   //   // Subscribe to changes
//   //   DataSource.addChangeListener(this.handleChange);
//   // }

//   // componentWillUnmount() {
//   //   // Clean up listener
//   //   DataSource.removeChangeListener(this.handleChange);
//   // }

//   // handleChange() {
//   //   // Update component state whenever the data source changes
//   //   this.setState({
//   //     comments: DataSource.getComments()
//   //   });
//   // }

//   render() {
//     const {fullName} = this.state
//     return (
//       <div>
//         {/* {this.state.comments.map((comment) => (
//           <Comment comment={comment} key={comment.id} />
//         ))} */}
//         <form onSubmit={this.handleSubmit}>
//           <input
//           type='text'
//           name='fullName'
//           placeholder='name'
//           value={this.state.name}
//           onChange={(e) => this.handleInputChange(e)}
//           />

//         </form>
//         dfsdzsgvvs
//       </div>
//     );
//   }
// }