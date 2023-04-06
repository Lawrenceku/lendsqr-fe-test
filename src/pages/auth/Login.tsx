import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import SigninImg from '../../assets/images/signin.svg';
import { Link } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import Button from '../../components/common/button/Index';
import InputField from '../../components/common/inputFields/InputField';

const Login = () => {
  const [showPassword, toggle] = useToggle(false);
  const [formData, setFormData] = useState<Record<string, string>>({
    email: 'me',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <section className='login'>
        <section className='half_container content p-14'>
          <div className='logo'>
            <img src={Logo} alt='LendSqr_logo' />
          </div>

          <div className='flex justify-center items-center '>
            <div className='img_container relative w-[80%] h-[400px]'>
              <img
                src={SigninImg}
                alt='LendSqr_logo'
                className='object-contain absolute w-full h-full'
              />
            </div>
          </div>
        </section>
        <section className='half_container form_container'>
          <div className='form_content'>
            <div className='message'>
              <h1>Welcome!</h1>
              <p>Enter details to login</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='border'>
                <InputField
                  type='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleInputChange}
                  name='email'
                  required
                />
              </div>
              <div className='password_container'>
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                  name='password'
                  required
                />

                <span
                  className='absolute top-5 right-4 cursor-pointer'
                  onClick={toggle}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
              <Link to='/'>Forgot Password?</Link>
              <Button type='submit'>Log In</Button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
