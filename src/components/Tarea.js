import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTarea } from '../actions/tareas';

const Tarea = ({ id, title, description, author, published, dispatch }) => (
    <div>
        <Link to={`/tarea/${id}`}>
            <h4>{title} ({published})</h4>
        </Link>
        <p>Autor: {author}</p>
        {description && <p>Descripción: {description}</p>}
        <button onClick={() => {
            dispatch(removeTarea({ id }));
        }}>Eliminar Tarea</button>
    </div>
);

export default connect()(Tarea);
