import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import HomeTemplate from './Template/HomeTemplate';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './Page/Home';
import Service from './Page/Service';
import Contact from './Page/Contact';


export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HistoryRouter history={history}>
        <Routes>
            <Route path='' element={<HomeTemplate></HomeTemplate>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='/service' element={<Service
                ></Service>}></Route>
                <Route path='/contact' element={<Contact
                ></Contact>}></Route>
            </Route>
        </Routes>
    </HistoryRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

