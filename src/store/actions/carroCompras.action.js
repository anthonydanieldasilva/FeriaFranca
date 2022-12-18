import { URL_API } from "../../constants/Database";
export const AGREGAR_ITEM = "AGREGAR_ITEM";
export const REMOVER_ITEM = "REMOVER_ITEM";
export const CONFIRMAR_CARRO = "CONFIRMAR_CARRO";

export const agregarItem = (item) => ({
    type: AGREGAR_ITEM,
    item,
});

export const removerItem = (itemID) => ({
    type: REMOVER_ITEM,
    itemID,
});


/*export const confirmarCarro = (payload, user) => {

    return async (dispatch) => {

        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ date: Date.now(), items: { ...payload }, user }),
            });

            const result = await response.json();
            console.log(result);
            dispatch({
                type: CONFIRMAR_CARRO,
                confirm: true,
            });

        } catch (err) {
            console.log(err);
        }

    };

};*/