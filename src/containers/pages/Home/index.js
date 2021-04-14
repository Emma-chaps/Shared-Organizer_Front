import { connect } from "react-redux";
import Home from "src/components/pages/Home";

const mapStateToProps = (state) => ({
  logged: state.user.login.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
