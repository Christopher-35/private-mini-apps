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
  }


  //state = this.initialState;

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState);
  }
render () {
  if (!this.props.isFalse){
    return null;
  }
  const {name, job} = this.state;
return (

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
    <input type="button" value="Submit" onClick={this.submitForm} />
  </form>
  // <div>

  //     sampleText

  //   {/* F1 collects name, email, and password for account creation. */}
  // </div>
)
}
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      isFalse: false,
      characters: []
    }

    // this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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


  render() {

    return (
      <div>
      {/* <form /*onSubmit={this.handleSubmit}*/ }
      <Form1 handleSubmit={this.handleSubmit} isFalse={this.state.isFalse}/>


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