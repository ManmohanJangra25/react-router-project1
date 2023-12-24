import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventRootElement(){
    return(
        <>
            <EventsNavigation />
            <div>
                <Outlet />
            </div>
        </>
    );
};