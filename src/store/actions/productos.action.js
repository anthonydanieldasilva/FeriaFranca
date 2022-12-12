
export const PRODUCTO_SELECCIONADO = "PRODUCTO_SELECCIONADO"
export const PRODUCTO_FILTRADO = "PRODUCTO_FILTRADO"

export const productoSeleccionado = (id)=> ({
    type : PRODUCTO_SELECCIONADO,
    productoID: id,
});

export const productoFiltrado = (id)=> ({
    type : PRODUCTO_FILTRADO,
    categoriaID: id,
});