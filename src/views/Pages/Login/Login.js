import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Container, InputGroup, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth } from '../../../apis/Auth';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo_login from '../../../assets/img/brand/logo_login.png'
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = props => {
  const history = useHistory()
  const { register, errors, handleSubmit } = useForm()
  const [isSending, setIsSending] = useState(false)
  const { from } = { from: { pathname: "/" } };

  const onSubmit = async (data) => {
    setIsSending(true)
    const response = await props.login(data)
    setIsSending(false)
    if (response) {
      history.replace(from);
    }
  }
  return (
    <div className="app flex-row align-items-center login_bg">
      <Container>
        <Row className="justify-content-center">
          <div className="col-lg-7 col-md-10 bg-white p-4 p-md-5 border rounded">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1 pr-4 border_right">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>Login</h1>
                  <p className="text-muted mb-4">Sign In to your account</p>
                  <InputGroup className="mb-3">
                    <TextField
                      size="small"
                      label="Username"
                      name="username"
                      inputRef={register({ required: true })}
                      variant="outlined"
                      error={errors.username ? true : false}
                      fullWidth={true}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <TextField
                      size="small"
                      type="password"
                      label="Password"
                      name="password"
                      inputRef={register({ required: true })}
                      variant="outlined"
                      error={errors.password ? true : false}
                      fullWidth={true}
                    />
                  </InputGroup>
                  <Row>
                    <Col xs="12">
                      <Button type="submit" variant="contained" color="primary" className="green_btn text-white" disabled={isSending} >{isSending ? <> Please wait
                <CircularProgress size={20} className='text-white' />
                      </> : 'Login'}</Button>
                    </Col>
                  </Row>
                </form>
              </div>
              <div className="col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
                <img alt="logo" src={logo_login} className="login_logo" title="ELKAY" />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(auth.login, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Login);
