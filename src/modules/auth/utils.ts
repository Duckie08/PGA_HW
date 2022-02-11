import { ISignupParams } from './../../models/auth';
import { ILoginParams, ILoginValidation } from '../../models/auth';
import { validEmailRegex } from '../../utils';

const validateEmail = (email: string) => {
  if (!email) {
    return 'emailRequire';
  }

  if (!validEmailRegex.test(email)) {
    return 'emailInvalid';
  }

  return '';
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'passwordRequire';
  }

  if (password.length < 4) {
    return 'minPasswordInvalid';
  }

  return '';
};

const validateRepeatPassword = (password: string, repeatPassword: string) => {
  if (!repeatPassword) {
    return 'passwordRequire';
  }

  if (password !== repeatPassword) {
    return 'matchPasswordInvalid';
  }

  return '';
};

const validateField = (field: string, value: string) => {
  if (value) return '';
  let fieldRequire = '';
  switch (field) {
    case 'name':
      fieldRequire = 'nameRequire';
      break;
    case 'gender':
      fieldRequire = 'genderRequire';
      break;
    case 'region':
      fieldRequire = 'regionRequire';
      break;
    case 'state':
      fieldRequire = 'stateRequire';
      break;
  }

  return fieldRequire;
};

export const validateLogin = (values: ILoginParams): ILoginValidation => {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
};

export const validateSignup = (values: ISignupParams) => {
  const { email, name, gender, region, state, password, repeatPassword } = values;
  return {
    email: validateField('email', email),
    name: validateField('name', name),
    gender: validateField('gender', gender),
    region: validateField('region', region),
    state: validateField('state', state),
    password: validateRepeatPassword(password, repeatPassword),
    repeatPassword: validateRepeatPassword(password, repeatPassword),
  };
};

export const validLogin = (values: ILoginValidation) => {
  return !values.email && !values.password;
};
