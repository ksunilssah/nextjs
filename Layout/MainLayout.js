import Header from "../Components/Header";

const MainLayout = props => (
  <div>
    <Header />
    {props.children}
  </div>);

export default MainLayout;
