import { createBrowserRouter } from "react-router-dom";
import RootElement from "./pages/RootElement";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, { eventDetailLoader, deleteEventAction } from "./pages/EventDetailPage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import EventRootElement from "./pages/EventRootElement";
import ErrorPage from "./pages/Error";
import { newEventAction } from "./components/EventForm";
import NewsletterPage, {newsletterAction} from "./pages/Newsletter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventRootElement />,
        // errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: newEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default routes;
