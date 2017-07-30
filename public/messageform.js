var React     = require('react');
var connect   = require('react-redux').connect;

class MessageForm extends React.Component {
  
  constructor() {
    super();
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({value: ''});
  }
  
  render() {
    return(

      <div className="form-signin">
        <form onSubmit={this.handleSubmit}>
          <label className="sr-only">Message</label>
          <input value={this.state.value} onChange={this.handleChange} type="text" id="message" className="form-control" placeholder="votre message" />
          <input id="valider" className="btn btn-warning  btn-lg btn-block" value="Valider" type="submit" />
        </form>
      </div>
        
     )
  }
}  

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: function(txt) { 
        dispatch( {type: "addMessage", message: txt} ) 
    }
  }
}
var MessageFormRedux = connect(
    null, 
    mapDispatchToProps
)(MessageForm);


module.exports = MessageFormRedux;