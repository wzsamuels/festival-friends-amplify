import {create, SetState} from "zustand";

type DataClearedStore = {
  dataCleared: boolean;
  setDataCleared: (dataCleared: boolean) => void;
}

const useDataClearedStore = create<DataClearedStore>((set: SetState<DataClearedStore>) => ({
  dataCleared: true,
  setDataCleared: (dataCleared) => set({ dataCleared }),
}));

export default useDataClearedStore;

