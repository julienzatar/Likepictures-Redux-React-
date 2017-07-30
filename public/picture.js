var React     = require('react');
var MessageFormRedux   = require('./messageform');
var MessageListRedux   = require('./messagelist');

class Picture extends React.Component {
 
   constructor() {
    super();
  
  }
  
  render() {

    return(
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <img className="img-responsive" src="./flowers.jpg" />
          <MessageFormRedux/>
          <MessageListRedux/>
        </div>
      </div>
     )
  }
}

module.exports = Picture;