
export const CATEGORIA_SELECCIONADA = "CATEGORIA_SELECCIONADA"

export const categoriaSeleccionada = (id)=> ({
    type: CATEGORIA_SELECCIONADA,
    categoriaID: id,
});