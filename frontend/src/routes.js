import { createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import EventRootElement from "./pages/EventRootElement";

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
                path: 'events',
                element: <EventRootElement />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />
                    },
                    {
                        path: ':id',
                        element: <EventDetailPage />
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />
                    },
                    {
                        path: ':id/edit',
                        element: <EditEventPage />
                    }       
                ]
            }
        ],
    }
]);

export default routes;