import axios from "axios";
import SnackbarContent from "components/Snackbar/SnackbarContent";

// // set loader
// export const setLoader = (value) => (dispatch) => {
//   dispatch({
//     type: SET_LOADER,
//     payload: value,
//   });
// };

// @Route   POST /uis/v1/users
// @DESC    Register new User
// @Access  Public
export const uploadOrders = (data) => (dispatch) => {
  // dispatch(setLoader(true));
  const formData = new FormData();
  formData.append("file", data);
  axios
    .post("http://localhost:5000/api/upload-csv-file", formData)
    .then((res) => {
      alert(res)
      //   < SnackbarContent
      // message = { res.data.message }
      // close
      // color = "success"
      //   />
      // dispatch(setLoader(false));
    })
    .catch((error) => {
      dispatch({
        type: "SET_ERRORS",
        payload: { register: error.response.data.errors[0].detail },
      });
      dispatch(setLoader(false));
    });
};

