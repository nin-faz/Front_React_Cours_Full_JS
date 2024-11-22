import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BookProvider } from './context/BookContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider>
                    <BookProvider>
                        <App />
                    </BookProvider>
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
