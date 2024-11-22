import { createRoot } from 'react-dom/client';

import App from './App';
import './index.scss';
import './i18n';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
