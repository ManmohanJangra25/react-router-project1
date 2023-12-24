import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";
import LoaderAnimation from "../components/LoaderAnimation";

function EventsPage() {
  const { events } = useLoaderData();

  const animationCss = {
    position: "absolute",
    top: '50%',
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "25px",
    width: "25px"
  }

  return (
    <Suspense fallback={<img style={animationCss} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_selective.gif" alt="Load Animation"/>}>
      <Await resolve={events}>
        {(loadedEvents) => {
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: "Could not fetch events!"};
    // throw new Response(JSON.stringify({message: "Could not fetch events!"}), {status: 500});
    return json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function eventsLoader() {
  return defer({
    events: loadEvents(),
  });
}
