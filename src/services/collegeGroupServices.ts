import {CollegeGroup} from "../models";
import {DataStore} from "aws-amplify";

export const getCollegeGroupByEmail = async (email: string) => {
  if (email.endsWith(".edu")) {
    const emailDomain = email.split("@")[1];
    try {
      const collegeGroups = await DataStore.query(CollegeGroup, (c) =>
        c.domain.eq(emailDomain));
      return collegeGroups[0];
    } catch (e) {
      console.log("Error getting college group by email", e)
    }
  }
  return null;
}