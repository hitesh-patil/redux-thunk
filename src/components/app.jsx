import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';
import GetGitUsers from './getGitUsers';

class App extends React.Component {
  render() {
    return (
      <div className='d-flex container'>
        <GetGitUsers />
      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('reduxBasics')
);
