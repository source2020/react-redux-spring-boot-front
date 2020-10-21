const tareasReducerDefaultState = [];

export default (state = tareasReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TAREA':
            return [
                ...state,
                action.tarea
            ];
        case 'REMOVE_TAREA':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_TAREA':
            return state.map((tarea) => {
                if (tarea.id === action.id) {
                    return {
                        ...tarea,
                        ...action.updates
                    };
                } else {
                    return tarea;
                }
            });
        case 'GET_TAREAs':
            return action.tareas;
        default:
            return state;
    }
};
