import { Outlet } from 'react-router';

function AppLayout() {
  return (
    <div className="container mx-auto p-4">
      <Outlet />
    </div>
  );
}

export default AppLayout;
