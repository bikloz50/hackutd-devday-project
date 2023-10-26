import Video from './pages/Video';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: "/video/:id", 
        element: <Video />
    },
    {
        path: "/",
        element: <Home />
    }


]);

function App() {
    return (
       <RouterProvider router={router} />

    );
}

export default App;
