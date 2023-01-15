/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CompanyHome from './pages/Home/CompanyHome/CompanyHome';
import CompanyManagement from './pages/Home/CompanyHome/CompanyManagement';
import CompanyProfile from './pages/Home/CompanyHome/CompanyProfile';
import CompanyRecruitment from './pages/Home/CompanyHome/CompanyRecruitment';
import CompanyRequest from './pages/Home/CompanyHome/CompanyRequest';
import CompanyAddJob from './pages/Home/CompanyHome/CompanyAddJob';
import CompanyViewApplicant from './pages/Home/CompanyHome/CompanyViewApplicant';
import UserHome from './pages/Home/UserHome/UserHome';
import UserProfile from './pages/Home/UserHome/UserProfile';
import UserRequest from './pages/Home/UserHome/UserRequest';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import { setNavigateAction } from './redux/actions/NavigateActions';
import CompanyHomeTemplate from './templates/CompanyHomeTemplate/CompanyHomeTemplate';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import AdminHomeTemplate from './templates/AdminHomeTemplate/AdminHomeTemplate';
import AdminHome from './pages/Home/AdminHome/AdminHome';


function App() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigateAction(navigate))
  }, [])

  return (
    <Fragment>
      <Routes>
        {/*Log In and Sign Up*/}
        <Route path='/' element={<UserTemplate Component={Login} />} />
        <Route path='/login' element={<UserTemplate Component={Login} />} />
        <Route path='/register' element={<UserTemplate Component={Register} />} />

        {/*User*/}
        <Route path='/userhome' element={<HomeTemplate Component={UserHome} />} />
        <Route path='/userprofile/:id' element={<HomeTemplate Component={UserProfile} />} />
        <Route path='/userrequest/:id' element={<HomeTemplate Component={UserRequest} />} />

        {/*Company*/}
        <Route path='/companyhome' element={<CompanyHomeTemplate Component={CompanyHome} />} />
        <Route path='/companymanagement' element={<CompanyHomeTemplate Component={CompanyManagement} />} />
        <Route path='/companyrecruitment' element={<CompanyHomeTemplate Component={CompanyRecruitment} />} />
        <Route path='/companyrequest' element={<CompanyHomeTemplate Component={CompanyRequest} />} />
        <Route path='/companyprofile' element={<CompanyHomeTemplate Component={CompanyProfile} />} />
        <Route path='/companyaddjob' element={<CompanyHomeTemplate Component={CompanyAddJob} />} />
        <Route path='/companyviewapplicantdraft' element={<CompanyHomeTemplate Component={CompanyViewApplicant} />} />

        {/*Admin*/}
        <Route path='/adminhome' element={<AdminHomeTemplate Component={AdminHome} />} />

        {/*Not found*/}
        <Route path='*' element={<HomeTemplate Component={NotFound} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
