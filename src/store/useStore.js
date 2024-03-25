import { create } from "zustand";

// Creamos el store con Zustand
const useSearchResultsStore = create((set) => ({
    resultadosBusqueda: [],
    searchFromRepo: false,
    comeFromNavbar: false,
    setResultadosBusqueda: (results) => set({ resultadosBusqueda: results }),
    limpiarResultadosBusqueda: () => set({ resultadosBusqueda: [] }),
    cambiarSearchFromRepo: () => set({ searchFromRepo: true }),
    setComeFromSearch: () => {

        const estadoActual = set.getState().comeFromNavbar;

        set({ comeFromNavbar: !estadoActual });
    },
}));

export default useSearchResultsStore;
