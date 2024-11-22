import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import Header from "./components/Header.jsx";
import Album from "./pages/Album.jsx";
// import AlbumDetails from "./pages/AlbumDetails.jsx";
import { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './context/ThemeContext';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext';
import CreateBook from './pages/CreateBook.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  /*
  const books = [
    {
      "id": 1,
      "label": "book1",
    },
    {
      "id": 2,
      "label": "book2",
    },
    {
      "id": 3,
      "label": "book3",
    },
    {
      "id": 4,
      "label": "book4",
    },
    {
      "id": 5,
      "label": "book5",
    }
  ]
    */
  
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/*
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.label}</li>
          ))}
        </ul>
      {/*
      Si on met une condition et que c'est vrai ça affiche le header
      et si c'est false ça ne l'affiche pas
      
      {false && (<div>
        Header  
      </div>)
      }
      */}
      
      <div className={classNames("w-100 vh-100", {
            "bg-dark text-light": theme === "dark",
            "bg-light text-dark": theme === "light"
        })}>
          <div className="row">
              <Header />
          </div>
          <div className="p-3">
            <Routes>
                {/*Public Routes*/}
                <Route path="/" element={<Home />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/books/:id" element={<BookDetails />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* <Route path="/create-book" element={user ? <CreateBook/> : <Navigate to={'/login'}></Navigate>}/>
                <Route path="/albums" element={user ? <Album/> : <Navigate to={'/login'}></Navigate>}/>
                <Route path="/albums/:id" element={<AlbumDetails/>}/> */}

                {/*Private Routes*/}
                <Route
                  path="/create-book"
                  element={
                      <ProtectedRoute>
                          <CreateBook />
                      </ProtectedRoute>
                  }
                />
                <Route
                    path="/albums"
                    element={
                        <ProtectedRoute>
                            <Album />
                        </ProtectedRoute>
                    }
                />

                {/*404*/}
                <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>          
      </div>
    </>
  )
}

export default App
