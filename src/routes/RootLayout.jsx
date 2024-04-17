import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      Root layout
      <Outlet />
    </div>
  );
};

export default RootLayout;
