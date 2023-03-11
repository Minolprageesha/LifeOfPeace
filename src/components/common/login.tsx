import React, { useEffect, useState } from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import logo from "../../components/assets/images/login.svg";
import { AuthService } from "../../servises/AuthService";
import { RequestState } from "../../RequestState";

const Login: React.FC = () => {
  const token = AuthService.getToken();
  const initialState = { email: "", password: "" };
  const history = useHistory();
  const [userData, setUserData] = useState(initialState);
  const [loginRequestState, setLoginRequestState] = useState<RequestState>(RequestState.INITIAL);
  const [verif, setVer] = useState("");
  const [verification, setVerification] = useState(false);
  const [disabledBtn, setDesableBtn] = useState<boolean>(false);

  console.log(verif, verification, disabledBtn);

  useEffect(() => {
    if (loginRequestState === RequestState.LOADING) {
      setDesableBtn(true);
      console.log(userData);
      AuthService.userLogin(userData)
        .then((res) => {
          if (res.success) {
            console.log(res.data);
            AuthService.setToken(res.data);
            setLoginRequestState(RequestState.SUCCESS);
            setDesableBtn(false);
          } else {
            setLoginRequestState(RequestState.FAILED);
            setDesableBtn(false);
            toast.error(res.error, {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
            });
          }
        })
        .catch(() => {
          setLoginRequestState(RequestState.FAILED);
        });
    }
  }, [loginRequestState]);

  const submitLogin = () => {
    history.push('/details')
    return;
    if (!userData.email) {
      toast.error("Please enter user email!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      return;
    }
    if (!userData.password) {
      toast.error("Please enter user password!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      return;
    }
    setLoginRequestState(RequestState.LOADING);
  };

  if (token || loginRequestState === RequestState.SUCCESS) {
    AuthService.getMe().then((res) => {
      setVer(res.data._id as any);
      if (res.success) {
        if (res.data.role == "SUPER_ADMIN") {
          history.push("/");
        } else if (res.data.role == "USER") {
          history.push("/");
        } else if (res.data.verifiedStatus == "PENDING") {
          setVerification(true);
        }
      } else {
        toast.error("Please verify your account!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
        });
      }
    });
  }

  // const verifyAccount = () => {
  //     if (!verifyData.verificationCode) {
  //         toast.error("Please enter Verification code!", {
  //             position: toast.POSITION.BOTTOM_RIGHT,
  //             className: "foo-bar",
  //         });
  //         return;
  //     }
  //     if (!verif) {
  //         toast.error("UserId Invalid!", {
  //             position: toast.POSITION.BOTTOM_RIGHT,
  //             className: "foo-bar",
  //         });
  //         return;
  //     }
  //     const verifyDatas = {
  //         userId: verif,
  //         verificationCode: verifyData.verificationCode,
  //         medium: "EMAIL"
  //     }

  //     CommonService.customerVerification(verifyDatas).then((res) => {
  //         if (res.success) {
  //             history.push(RouteName.CUSTOMER_ADMIN_SUBSCRIPTION)
  //         } else {
  //             toast.error(res.error, {
  //                 position: toast.POSITION.BOTTOM_RIGHT,
  //                 className: 'foo-bar'
  //             });
  //         }
  //     });
  // }
  return (
    <section className="account-page-area section-gap-equal">
      <div className="containerLogin position-relative">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-6">
            <a href="/home">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-lg-5">
            <div className="login-form-box">
              <h1 className="title">Sign in</h1>
              <p>
                Don’t have an account? <a href="/signup">Sign up</a>
              </p>
              <form>
                <div className="form-group">
                  <label>Username or email*</label>
                  <input
                    type="email"
                    name="current-log-email"
                    id="current-log-email"
                    placeholder="Email"
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <input
                    type="password"
                    name="current-log-password"
                    id="current-log-password"
                    placeholder="Password"
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  />
                  <span className="password-show">
                    <i className="icon-76"></i>
                  </span>
                </div>
                <div className="form-group chekbox-area">
                  <a href="#" className="password-reset">
                    Lost your password?
                  </a>
                </div>
                <div className="form-group">
                  <button type="button" className="edu-btn btn-medium" onClick={submitLogin}>
                    Sign In <i className="icon-4"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
