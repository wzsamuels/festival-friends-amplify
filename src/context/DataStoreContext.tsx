// DataStoreContext.js
import { createContext } from 'react';

export type DataStoreContextType = {dataStoreCleared: boolean, saveDataStoreCleared: (value: boolean) => void}

const DataStoreContext = createContext<DataStoreContextType | null>(null)

export default DataStoreContext;
