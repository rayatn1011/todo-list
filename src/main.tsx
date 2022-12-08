import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css'; // init tailwinds css
import '@/features/i18n'; // init i18n
import App from '@/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
