
class App extends React.Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    // this.state = {
    //   // "DataSource" is some global data source
    //   comments: DataSource.getComments()
    // };
  }

  // componentDidMount() {
  //   // Subscribe to changes
  //   DataSource.addChangeListener(this.handleChange);
  // }

  // componentWillUnmount() {
  //   // Clean up listener
  //   DataSource.removeChangeListener(this.handleChange);
  // }

  // handleChange() {
  //   // Update component state whenever the data source changes
  //   this.setState({
  //     comments: DataSource.getComments()
  //   });
  // }

  render() {
    return (
      <div>
        {/* {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))} */}
        dfsdzsgvvs
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//export default App;

// var Form1 = () => (
//   <div className="Form1">
//     {/* F1 collects name, email, and password for account creation. */}
//   </div>
// );

// var Form2 = () => (
// <div className="Form2">
//     {/* F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number. */}
//   </div>
// );

// var Form3 = () => (
//   <div className="Form3">
//       {/* F3 collects credit card #, expiry date, CVV, and billing zip code. */}
//     </div>
//   );

//   var FinalForm = () => (
//     <div className="FinalForm">
//         {/* a confirmation page which summarizes the data collected in the prior three steps. This page contains a Purchase button that completes the purchase. When the purchase is complete, the user is returned to the homepage. */}
//       </div>
//     );


ReactDOM.render(<App/>, document.getElementById('app'));
