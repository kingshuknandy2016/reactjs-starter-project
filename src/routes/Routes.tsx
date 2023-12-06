import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import HomePage from '../pages/HomePage';
import { ToDo } from '../features/ToDo/ToDo';

const RoutesCustom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/registration" element={<SignUp></SignUp>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/todo" element={<ToDo></ToDo>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
};

export default RoutesCustom;
