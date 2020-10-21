import axios from '../axios/axios';

const _addTarea = (tarea) => ({
    type: 'ADD_TAREA',
    tarea
});

export const addTarea = (tareaData = {
    title: '',
    description: '',
    author: '',
    published: 0
}) => {
    return (dispatch) => {
        const tarea = {
            title: tareaData.title,
            description: tareaData.description,
            author: tareaData.author,
            published: tareaData.published
        };

        return axios.post('tareas/create', tarea).then(result => {
            dispatch(_addTarea(result.data));
        });
    };
};

const _removeTarea = ({ id } = {}) => ({
    type: 'REMOVE_TAREA',
    id
});

export const removeTarea = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`tareas/${id}`).then(() => {
            dispatch(_removeTarea({ id }));
        })
    }
};

const _editTarea = (id, updates) => ({
    type: 'EDIT_TAREA',
    id,
    updates
});

export const editTarea = (id, updates) => {
    return (dispatch) => {
        return axios.put(`tareas/${id}`, updates).then(() => {
            dispatch(_editTarea(id, updates));
        });
    }
};

const _getTareas = (tareas) => ({
    type: 'GET_TAREAs',
    tareas
});

export const getTareas = () => {
    return (dispatch) => {
        return axios.get('tareas').then(result => {
            const tareas = [];

            result.data.forEach(item => {
                tareas.push(item);
            });

            dispatch(_getTareas(tareas));
        });
    };
};
