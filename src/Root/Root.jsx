import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;