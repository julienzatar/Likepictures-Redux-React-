var React     = require('react');
var connect   = require('react-redux').connect;

class MessageList extends React.Component {
  
  constructor() {
    super();
  }
  

  render() {
    
    var messageList = [];
    for(var i=0; i<this.props.message.length; i++) {
      messageList.push(<li className="list-group-item">{this.props.message[i]}</li>);
    }

    return(
      <div>
        <h2 className="form-signin-heading">{this.props.like} like(s) <a><span onClick={this.props.handleClick} className="glyphicon glyphicon-thumbs-up"></span></a></h2>
        <ul className="list-group">
         {messageList}
        </ul>
      </div>
     )
  }
}  


function mapStateToProps(store) {
  return { like: store.like, message: store.message }
}
function mapDispatchToProps(dispatch) {
  return {
    handleClick: function() { 
        dispatch( {type: 'addLike'} ) 
    }
  }
}
var MessageListRedux = connect(
    mapStateToProps, 
    mapDispatchToProps
)(MessageList);


module.exports = MessageListRedux;
