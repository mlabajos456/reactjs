import { useState, useContext, Fragment } from "react"
import Avatar from "@components/avatar"
import { useSkin } from "@hooks/useSkin"
import useJwt from "@src/auth/jwt/useJwt"
import { useDispatch, useSelector } from "react-redux"
import { toast, Slide } from "react-toastify"
import { getToken } from "@store/actions/login/login"
import { handleLogin } from "@store/actions/auth"
import { AbilityContext } from "@src/utility/context/Can"
import { Link, useHistory } from "react-router-dom"
import InputPasswordToggle from "@components/input-password-toggle"
import { getHomeRouteForLoggedInUser } from "@utils"
import { getLogin } from "@src/services/loginService"
//import useLogin from "@src/services/loginService"

import {
  Facebook,
  Twitter,
  Mail,
  GitHub,
  HelpCircle,
  Coffee
} from "react-feather"
import { AvForm, AvInput } from "availity-reactstrap-validation-safe"
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from "reactstrap"

import "@styles/base/pages/page-auth.scss"
import { useQuery, useMutation } from "react-query"

const ToastContent = ({ name, role, type }) => (
  <Fragment>
    <div className="toastify-header">
      <div className="title-wrapper">
        <Avatar size="sm" color={type} icon={<Coffee size={12} />} />
        <h6 className="toast-title font-weight-bold">Welcome, {name}</h6>
      </div>
    </div>
    <div className="toastify-body">
      <span>
        You have successfully logged rol {role ? "Admin" : "mortal"} user to
        Vuexy. Now you can start to explore. Enjoy!
      </span>
    </div>
  </Fragment>
)

const Login = (props) => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const history = useHistory()
  const [email, setEmail] = useState("admin@demo.com")
  const [password, setPassword] = useState("admin")
  const loginToken = useMutation(getLogin, {
    onSuccess: async (data) => {
      setSkin("dark")
      const usuario = {
        email: data.user.email,
        id: data.user.id,
        nombreCompleto: data.user.nombreCompleto,
        username: data.user.username,
        avatar: require("@src/assets/images/portrait/small/avatar-s-11.jpg")
          .default,

        ability: [
          {
            action: "manage",
            subject: "all"
          }
        ]
      }
      const user = { ...usuario }
      dispatch(getToken(data.token, user))

      ability.update(user.ability)
      history.push(getHomeRouteForLoggedInUser("admin"))
      toast.success(
        <ToastContent
          name={data.user.nombreCompleto}
          role={data.administrador || "admin"}
          type="success"
        />,
        { transition: Slide, hideProgressBar: true, autoClose: 2000 }
      )
    }
  })
  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default

  /*  async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    )
    return data
  }
  const res = useQuery("posts", fetchPosts)
  console.log(res) */

  const handleSubmit = async (event, errors) => {
    if (errors && !errors.length) {
      loginToken.mutateAsync()
      event.preventDefault()

      /* await getLogin(email, password)
        .then((e) => {
          setSkin("dark")
          const usuario = {
            email: e.data.user.email,
            id: e.data.user.id,
            nombreCompleto: e.data.user.nombreCompleto,
            username: e.data.user.username,
            avatar: require("@src/assets/images/portrait/small/avatar-s-11.jpg")
              .default,

            ability: [
              {
                action: "manage",
                subject: "all"
              }
            ]
          }
          const data = { ...usuario }
          console.log(data)
          dispatch(getToken(e.data.token, data))
          console.log(e.data.user)

          ability.update(data.ability)
          history.push(getHomeRouteForLoggedInUser("admin"))
          toast.success(
            <ToastContent
              name={e.data.user.nombreCompleto}
              role={e.data.administrador || "admin"}
              type="success"
            />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch((err) => {
          console.log(`${err}`)
          toast.info(<ToastContent name="Advertencia" role="" type="info" />, {
            transition: Slide,
            hideProgressBar: true,
            autoClose: 2000
          })
        }) */
      //dispatch(getToken(email, password))
      // dispatch(handleLogin(data))
      /*   history.push(getHomeRouteForLoggedInUser('admin'))
        
        const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
        
        toast.success(
          <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
          { transition: Slide, hideProgressBar: true, autoClose: 2000 }
        ) */
      /*    useJwt
           .login({ email, password })
           .then(res => {
             console.log(res.data.userData)
             const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
             ability.update(res.data.userData.ability)
           
             history.push(getHomeRouteForLoggedInUser(data.role))
             toast.success(
               <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
               { transition: Slide, hideProgressBar: true, autoClose: 2000 }
             )
           })
           .catch(err => console.log(err)) */
    }
  }
  if (loginToken.isLoading) {
    return (
      <>
        <h1>loading</h1>
      </>
    )
  } else {
    return (
      <div className="auth-wrapper auth-v2">
        <Row className="auth-inner m-0">
          <Link
            className="brand-logo"
            to="/"
            onClick={(e) => e.preventDefault()}
          >
            <svg viewBox="0 0 139 95" version="1.1" height="28">
              <defs>
                <linearGradient
                  x1="100%"
                  y1="10.5120544%"
                  x2="50%"
                  y2="89.4879456%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#000000" offset="0%"></stop>
                  <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="64.0437835%"
                  y1="46.3276743%"
                  x2="37.373316%"
                  y2="100%"
                  id="linearGradient-2"
                >
                  <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                  <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Artboard"
                  transform="translate(-400.000000, -178.000000)"
                >
                  <g id="Group" transform="translate(400.000000, 178.000000)">
                    <path
                      d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                      id="Path"
                      className="text-primary"
                      style={{ fill: "currentColor" }}
                    ></path>
                    <path
                      d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                      id="Path"
                      fill="url(#linearGradient-1)"
                      opacity="0.2"
                    ></path>
                    <polygon
                      id="Path-2"
                      fill="#000000"
                      opacity="0.049999997"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                    ></polygon>
                    <polygon
                      id="Path-2"
                      fill="#000000"
                      opacity="0.099999994"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                    ></polygon>
                    <polygon
                      id="Path-3"
                      fill="url(#linearGradient-2)"
                      opacity="0.099999994"
                      points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="brand-text text-primary ml-1">Vuexy</h2>
          </Link>
          <Col
            className="d-none d-lg-flex align-items-center p-5"
            lg="8"
            sm="12"
          >
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img className="img-fluid" src={source} alt="Login V2" />
            </div>
          </Col>
          <Col
            className="d-flex align-items-center auth-bg px-2 p-lg-5"
            lg="4"
            sm="12"
          >
            <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
              <CardTitle tag="h2" className="font-weight-bold mb-1">
                Bienvenido a TU PUTAMADRE! ????
              </CardTitle>
              <CardText className="mb-2">
                Por favor ingrese sus credenciales
              </CardText>
              <Alert color="primary">
                <div className="alert-body font-small-2">
                  <p>
                    <small className="mr-50">
                      <span className="font-weight-bold">Admin:</span>{" "}
                      admin@demo.com | admin
                    </small>
                  </p>
                  <p>
                    <small className="mr-50">
                      <span className="font-weight-bold">Client:</span>{" "}
                      client@demo.com | client
                    </small>
                  </p>
                </div>
                <HelpCircle
                  id="login-tip"
                  className="position-absolute"
                  size={18}
                  style={{ top: "10px", right: "10px" }}
                />
                <UncontrolledTooltip target="login-tip" placement="left">
                  Esto es para probar el template.
                </UncontrolledTooltip>
              </Alert>
              <AvForm className="auth-login-form mt-2" onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="form-label" for="login-email">
                    usuario
                  </Label>
                  <AvInput
                    required
                    autoFocus
                    type="text"
                    value={email}
                    id="login-email"
                    name="login-email"
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <div className="d-flex justify-content-between">
                    <Label className="form-label" for="login-password">
                      Contrase??a
                    </Label>
                    <Link to="/forgot-password">
                      <small>??Olvid?? la contrase??a?</small>
                    </Link>
                  </div>
                  <InputPasswordToggle
                    required
                    tag={AvInput}
                    value={password}
                    id="login-password"
                    name="login-password"
                    className="input-group-merge"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <CustomInput
                    type="checkbox"
                    className="custom-control-Primary"
                    id="remember-me"
                    label="Recordarme"
                  />
                </FormGroup>
                <Button.Ripple
                  color="primary"
                  block
                  disabled={!email.length || !password.length}
                >
                  Iniciar Sesi??n
                </Button.Ripple>
              </AvForm>
              {/* <p className='text-center mt-2'>
                <span className='mr-25'>New on our platform?</span>
                <Link to='/register'>
                  <span>Create an account</span>
                </Link>
              </p>
              <div className='divider my-2'>
                <div className='divider-text'>or</div>
              </div>
              <div className='auth-footer-btn d-flex justify-content-center'>
                <Button.Ripple color='facebook'>
                  <Facebook size={14} />
                </Button.Ripple>
                <Button.Ripple color='twitter'>
                  <Twitter size={14} />
                </Button.Ripple>
                <Button.Ripple color='google'>
                  <Mail size={14} />
                </Button.Ripple>
                <Button.Ripple className='mr-0' color='github'>
                  <GitHub size={14} />
                </Button.Ripple>
              </div> */}
            </Col>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
