import './App.css';
import { BrowserRouter } from 'react-router-dom';

import RoutesCustom from './routes/Routes';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RoutesCustom></RoutesCustom>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
