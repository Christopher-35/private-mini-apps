
// var App = (props) => (


//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//       <VideoListEntry videos={this.props.videos} />
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>


// );

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

ReactDOM.render(<App/>, document.getElementById('app'));