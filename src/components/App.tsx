import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RouteName } from "../RouteName";
import Auth from "./common/Auth";
import { MenuContext } from "./context/MenuContext";
import { Role } from "../models/Role";
import ContentLayout from "./common/ContentLayout";
import SidePane from "./common/SidePane";
import Content from "./common/Content";
import NavBarDashbord from "./common/NavBarDashbord";
import Signup from "./common/Signup";
import AdminSideMenu from "./admin/AdminSideBar";
import Login from "./common/login";
import VerifyRole from "./common/VerifyRole";
import NavBarMain from "./common/NavBarMain";
import LeadForm from "./common/leadForm";
import FinalResultPage from "./common/finalResault";
import DetailsPage from "./common/Details";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  return (
    <Router>
      <Switch>
        <Route path={RouteName.LOGIN}>
          <Login />
        </Route>
        <Route path={RouteName.LEAD_FORM}>
          <NavBarMain />
          <LeadForm />
        </Route>
        <Route path={RouteName.RESULT}>
          <NavBarMain />
          <FinalResultPage />
        </Route>
        <Route path={RouteName.SIGNUP}>
          <Signup />
        </Route>
        <Route path={RouteName.DETAILS}>
          <DetailsPage />
        </Route>
        <Route path="/">
          <Auth>
            <MenuContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
              <div className="bg-gray-100" style={{ display: "flex", flexDirection: "column", position: "absolute", width: "100%", height: "100%" }}>
                <Router>
                  <Switch>
                    <Route path="/super-admin">
                      <VerifyRole allow={Role.SUPER_ADMIN}>
                        <SystemAdminDashbordRouter />
                      </VerifyRole>
                    </Route>
                  </Switch>
                </Router>
              </div>
            </MenuContext.Provider>
          </Auth>
        </Route>
      </Switch>
    </Router>
  );
};

//  System Admin  Dashbord
const SystemAdminDashbordRouter: React.FC = () => {
  return (
    <ContentLayout>
      <NavBarDashbord />
      <Router>
        <SidePane>
          <AdminSideMenu />
        </SidePane>
        <Content>
          <Switch></Switch>
        </Content>
      </Router>
    </ContentLayout>
  );
};
export default App;
