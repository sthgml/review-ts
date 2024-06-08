import ReactDOM from 'react-dom/client';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const element = document.getElementById('root');

if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<App />);
}

serviceWorkerRegistration.register();
