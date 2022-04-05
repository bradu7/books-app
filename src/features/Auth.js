import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuthContext } from './Auth.context';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    retypePassword: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    retypePassword: '',
  });
  const [serverError, setServerError] = useState();
  const { token, login } = useAuthContext();
  const location = useLocation();
  const isRegister = location.pathname.includes('register');
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (token) {
      navigate(from);
    }
  }, [token, from, navigate]);

  function handleInputChange(e) {
    setErrors({ ...errors, [e.target.name]: '' });
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    const data = await fetch('http://localhost:3005/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    }).then((res) => res.json());

    if (!data.accessToken) {
      setServerError(data);
      return;
    }
    
    login(data);
  }

  async function handleRegister() {
    let hasErrors = false;
    if (values.password !== values.retypePassword) {
      setErrors({ ...errors, retypePassword: "The passwords don't match." });
      hasErrors = true;
    }

    if (!values.firstName) {
      setErrors({ ...errors, firstName: 'You need to provide a first name.' });
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const { retypePassword, ...valuesWithoutRetype } = values;

    const data = await fetch('http://localhost:3005/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(valuesWithoutRetype),
    }).then((res) => res.json());

    if (!data.accessToken) {
      setServerError(data);
      return;
    }

    login(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isRegister) {
      await handleLogin();
    } else {
      await handleRegister();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='register'>{isRegister ? 'Register' : 'Login'}</h1>
      {serverError && (
        <p>{serverError}</p>
      )}
      <p className='login'>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          id="email"
          
        />
      </p>
      <p className='login'>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          id="password"
          
        />
      </p>

      {isRegister && (
        <>
          <p className='login'>
            <label htmlFor="retypePassword">Retype Password: </label>
            <input
              type="password"
              name="retypePassword"
              value={values.retypePassword}
              onChange={handleInputChange}
              id="retypePassword"
              
            />
            {errors.retypePassword && (
              <>
                <br />
                {errors.retypePassword}
              </>
            )}
          </p>
          <p className='login'>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
              id="firstName"
              
            />
            {errors.firstName && (
              <>
                <br />
                {errors.firstName}
              </>
            )}
          </p>
          <p className='login'>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
              id="lastName"
              
            />
          </p>
        </>
      )}

      <p>
        <button
          type="submit" className='submitButton'
         
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
      </p>
    </form>
  );
}
