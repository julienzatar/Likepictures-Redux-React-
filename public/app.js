var React     = require('react');
var ReactDOM  = require('react-dom');
var Picture   = require('./picture');
var createStore =  require('redux').createStore;
var Provider    =  require('react-redux').Provider;

function pictureReducer(store, action) {
  if(action.type == 'addLike') {
    return { like: store.like + 1 , message: store.message}
  } else if(action.type == 'addMessage') {
    var copyMessage = store.message.slice();
    copyMessage.push(action.message);
    return {like : store.like, message: copyMessage} 
  } else {
    return store;
  }
}
const store = createStore(pictureReducer, {like : 0, message:[]});


ReactDOM.render(  
    <Provider store={store}> 
      <Picture/>
    </Provider>
  ,
  document.getElementById('container')
);