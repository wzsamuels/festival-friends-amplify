import {create, SetState} from "zustand";
import {Festival} from "../models";
import getErrorMessage from "../lib/getErrorMessage";
import {API, DataStore, graphqlOperation} from "aws-amplify";
import {GraphQLResult} from "@aws-amplify/api";
import {listFestivals} from "../graphql/queries";

type EventStore = {
  events: Festival[],
  loadingEvents: boolean,
  fetchEvents: () => void
  error: string | null,
}

type GraphQLResultExtended = GraphQLResult & {
  data: {
    listFestivals: {
      items: Festival[];
    };
  };
  errors?: { message: string }[]
};

const useEventStore = create<EventStore>((set: SetState<EventStore>) => ({
  events: [] as Festival[],
  loadingEvents: false,
  error: null,
  fetchEvents: async () => {
    set({loadingEvents: true})
    try {

      /*
      const eventSub = await DataStore.observeQuery(Festival).subscribe(({items}) => {
        console.log("Events in store", items)
        set({events: items})
      })

       */

      await DataStore.start()
      const eventData = await DataStore.query(Festival);
      console.log("Fetching events in store: ", eventData)
      set({events: eventData})

      /*
      const eventData = await API.graphql(graphqlOperation(listFestivals)) as GraphQLResultExtended;
      if(eventData.errors) {
        set({error: eventData.errors[0].message || "Unknown error"})
      } else {
        const events = eventData.data.listFestivals.items
        console.log("Events in store", events)
        set({events})
      }

       */


    } catch (e) {
      console.log("Error observing events in EventPage.tsx", getErrorMessage(e));
    } finally {
      set({loadingEvents: false})
    }
  }
}));

export default useEventStore;