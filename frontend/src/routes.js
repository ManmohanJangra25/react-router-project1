import { createBrowserRouter } from "react-router-dom";
import RootElement from "../src/RootElement";
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootElement/>,
        errorElement: '',
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/events',
                element: <EventsPage />
            },
            {
                path: '/events/:id',
                element: <EventDetailPage />
            },
            {
                path: '/events/new',
                element: <NewEventPage />
            },
            {
                path: '/events/:id/edit',
                element: <EditEventPage />
            }
        ],
    }
]);

export default routes;