import {create, SetState} from "zustand";
import {Event} from "../models";
import getErrorMessage from "../lib/getErrorMessage";
import { DataStore} from "aws-amplify";

type EventStore = {
  events: Event[],
  loadingEvents: boolean,
  fetchEvents: () => void
  eventsUnsubscribe: () => void
  eventSubscription: any
  error: string | null,
}


const useEventStore = create<EventStore>((set: SetState<EventStore>, get) => ({
  events: [] as Event[],
  loadingEvents: false,
  error: null,
  eventSubscription: null,
  fetchEvents: async () => {
    set({loadingEvents: true})
    try {


      const eventSub = await DataStore.observeQuery(Event).subscribe(({items}) => {
        console.log("Events in store", items)
        set({events: items})
      })
      set({eventSubscription: eventSub})

/*
      await DataStore.start()
      const eventData = await DataStore.query(Event);
      console.log("Fetching events in store: ", eventData)
      set({events: eventData})
*/
      /*

      const eventData = await API.graphql(graphqlOperation(listEvents)) as GraphQLResultExtended;
      if(eventData.errors) {
        set({error: eventData.errors[0].message || "Unknown error"})
      } else {
        const events = eventData.data.listEvents.items
        console.log("Events in store", events)
        set({events})
      }

       */


    } catch (e) {
      console.log("Error observing events in EventPage.tsx", getErrorMessage(e));
    } finally {
      set({loadingEvents: false})
    }
  },
  eventsUnsubscribe: () => get().eventSubscription?.unsubscribe()
}));

export default useEventStore;