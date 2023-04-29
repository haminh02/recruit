import React from 'react';
import logo from './logo.svg';
import 'antd/dist/reset.css'
import './App.css';
import {Route, Routes} from "react-router-dom";
import { ConfigProvider } from "antd";
import Button from "./components/common/Button";

const theme = {
    token: {
        colorPrimary: '#005773',
    }
}

function App() {
    return <ConfigProvider theme={theme}>
        <Routes>
            <Route path="/" element={ <Button type="primary"> Test </Button> }/>
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </ConfigProvider>;
}

export default App;
