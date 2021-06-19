import useContext from 'react';
import { currentUser } from 'src/components/DashboardSidebar';

const Logout = () => {
  const userData = useContext(currentUser);
  userData.EmpId = '';
  userData.EmpName = 'Guest';
  userData.JobTitle = 'Please Log In';
  userData.DeptId = '';
  userData.City = '';
  userData.Address = '';
  userData.Phone = '';
  userData.ZipCode = '';
  userData.MonthSalary = '';
  userData.AnnualLeave = '';
  window.location.href('/app');
  return (
    <>
    </>
  );
};

export default Logout;
