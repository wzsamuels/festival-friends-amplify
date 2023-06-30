import {create, SetState} from "zustand";
import {Event} from "../models";
import getErrorMessage from "../lib/getErrorMessage";
import {API} from "@aws-amplify/api";
import {graphqlOperation} from "aws-amplify";
import {listEvents} from "../graphql/queries";

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
  loadingEvents: true,
  error: null,
  eventSubscription: null,
  fetchEvents: async () => {
    set({loadingEvents: true})
    try {
      console.log("Fetching events...");
      /*
      const eventSub = await DataStore.observeQuery(Event, c => c.and(c => [
        c.cancelled.eq(false),
        c.hasPaid.eq(true),
        c.collegeEvent.eq(false),
        c.endDate.ge(new Date().toISOString()),
      ])).subscribe(({items}) => {
        console.log("Events in store", items)
        set({events: items})
      })
      set({eventSubscription: eventSub})

       */

/*
      await DataStore.start()
      const eventData = await DataStore.query(Event);
      console.log("Fetching events in store: ", eventData)
      set({events: eventData})
*/
      // Only fetch public events that are paid for, not cancelled, not a group event, and aren't in the past
      const eventData = await API.graphql(graphqlOperation(listEvents, { filter: {
        and: [
          { cancelled: { eq: false } },
          { hasPaid: { eq: true } },
          { collegeEvent: { eq: false } },
          { endDate: { ge: new Date().toISOString()}}
        ]
      }}));
      if ("errors" in eventData || "data" in eventData) {
        if (eventData.errors) {
          set({ error: eventData.errors[0].message || "Unknown error" });
        } else {
          const events = eventData.data.listEvents.items;
          console.log("Events in store", events);
          set({ events });
        }
      } else {
        console.error("eventData is an Observable, not a GraphQLResult");
      }

    } catch (e) {
      console.error("Error fetching events in store", getErrorMessage(e));
    } finally {
      set({loadingEvents: false})
    }
  },
  eventsUnsubscribe: () => get().eventSubscription?.unsubscribe()
}));

export default useEventStore;