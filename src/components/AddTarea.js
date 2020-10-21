import React from 'react';
import TareaForm from './TareaForm';
import { connect } from 'react-redux';
import { addTarea } from '../actions/tareas';

const AddTarea = (props) => (
    <div>
        <h3>Información de la Tarea:</h3>
        <TareaForm
            onSubmitTarea={(tarea) => {
                props.dispatch(addTarea(tarea));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddTarea);
