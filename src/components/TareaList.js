import React from 'react';
import { connect } from 'react-redux';
import Tarea from './Tarea';

const TareaList = (props) => (
    <div>
        Lista Tareas:
        <ul>
            {props.tareas.map(tarea => {
                return (
                    <li key={tarea.id}>
                        <Tarea {...tarea} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        tareas: state
    };
}

export default connect(mapStateToProps)(TareaList);
