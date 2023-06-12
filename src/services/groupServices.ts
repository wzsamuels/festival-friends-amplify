import {Group} from "../models";
import {DataStore} from "@aws-amplify/datastore";

export const getGroupByEmail = async (email: string) => {
  if (email.endsWith(".edu")) {
    const emailDomain = email.split("@")[1];
    try {
      const groups = await DataStore.query(Group, (c) =>
        c.domain.eq(emailDomain));
      return groups[0];
    } catch (e) {
      console.log("Error getting college group by email", e)
    }
  }
  return null;
}