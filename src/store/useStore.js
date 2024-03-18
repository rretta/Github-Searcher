import { create } from "zustand";

// Creamos el store con Zustand
const useSearchResultsStore = create((set) => ({
    resultadosBusqueda: [],
    searchFromRepo: false,
    setResultadosBusqueda: (results) => set({ resultadosBusqueda: results }),
    limpiarResultadosBusqueda: () => set({ resultadosBusqueda: [] }),
    cambiarSearchFromRepo: () => set({ searchFromRepo: true }),
}));

export default useSearchResultsStore;
