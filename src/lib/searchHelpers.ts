interface DataItem {
  field: string;
  value: string;
}

interface QueryCriteria {
  [key: string]: {
    eq: (value: string) => void;
  };
}

export const criteria = (c: any, filteredData: DataItem[]) => {
  return filteredData.map((item) => c[item.field].eq(item.value));
};

export const getFilteredData = <T extends object>(data: T) => {
  return Object.entries(data)
    .filter(([_, value]) => value)
    .map(([field, value]) => ({field, value}));
}