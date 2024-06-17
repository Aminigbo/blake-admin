import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './Screens/Signin';
import Dashboard from './Screens/Dashboard';
import OverviewUser from './Screens/OverviewUser';
import OverviewM from './Screens/OverviewM';
import Transaction from './Screens/Transaction';
import Super from './Screens/Super';
import Activity from './Screens/Activity';
import Allvendors from './Screens/vendors/page/all-vendors';
import AllUsers from './Screens/users/page/all-users';
import AllRiders from './Screens/riders/page/all-riders';
import VendorProfile from './Screens/vendors/page/vendor-page';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/useroverview' element={<OverviewUser />} />
        <Route path='/merchantoverview' element={<OverviewM />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/superadmin' element={<Super />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/all-vendors' element={<Allvendors />} />
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/all-riders' element={<AllRiders />} />
        <Route path='/vendor-profile' element={<VendorProfile />} />

      </Routes>
    </div>
  );
}

export default App;
