interface DataItem {
  field: string;
  value: string;
}

export const criteria = (c: any, filteredData: DataItem[]) => {
  return filteredData.map((item) => c[item.field].contains(item.value));
};

export const getFilteredData = <T extends object>(data: T) => {
  return Object.entries(data)
    .filter(([_, value]) => value)
    .map(([field, value]) => ({ field, value }));
};
