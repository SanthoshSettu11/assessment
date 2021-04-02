import React, { useEffect, useState } from "react";
import "./App.css";
import { connect, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Backdrop, CircularProgress } from "@material-ui/core";
import theme from "./theme";
import { stopLoader, showLoader } from "../src/store/Loader/LoaderActions";
import Loader from "./views/StyledMaterialComponents/Loader";
import { NOODLEIMAGE, NOODLELIST } from "./services/constants";
import { getMethod } from "./services/ApiServices";
import Home from "./views/Home/Home";

function App(props) {
  const dispatch = useDispatch();
  const [noodleList, setNoodleList] = useState([]);
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    props.showLoader();
    getMethod(NOODLELIST, {})
      .then((res) => {
        setNoodleList(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        getMethod(NOODLEIMAGE, {})
          .then((imageResponse) => {
            setImageList(imageResponse);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            props.stopLoader();
          });
      });
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Home NoodleList={noodleList} ImageList={imageList}></Home>
        </div>
        {props.isShowLoader && <Loader open={props.isShowLoader}></Loader>}
      </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowLoader: state.LoaderReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showLoader: () => dispatch(showLoader()),
    stopLoader: () => dispatch(stopLoader())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);