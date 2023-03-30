import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/index.css';

// Below types for BluePrint prefix (bp), because it was not working in TypeScript
declare module 'react' {
	interface HTMLAttributes<T>
		extends React.AriaAttributes,
			React.DOMAttributes<T> {
		bp?: string;
	}
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
