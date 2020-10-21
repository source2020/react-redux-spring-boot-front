import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddTarea from '../components/AddTarea';
import EditTarea from '../components/EditTarea';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={DashBoard} exact={true} />
                <Route path="/add" component={AddTarea} />
                <Route path="/tareas/:id" component={EditTarea} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
