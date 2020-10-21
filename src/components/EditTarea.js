import React from 'react';
import TareaForm from './TareaForm';
import { connect } from 'react-redux';
import { editTarea } from '../actions/tareas';

const EditTarea = (props) => (
    <div className='container__box'>
        <TareaForm
            tarea={props.tarea}
            onSubmitTarea={(tarea) => {
                props.dispatch(editTarea(props.tarea.id, tarea));
                props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        tarea: state.find((tarea) =>
            tarea.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditTarea);
