import { isEmpty } from 'lodash';
import { isNil } from 'lodash/lang';
import { EMAIL_KEY, EMAIL_REGEX, PASSWORD_KEY } from '../../constants/form';

export const validateFormFields = (fields) => {
  let errors = [];

  for (const [name, value] of Object.entries(fields)) {
    const valid = validateField({
      name,
      value,
      isEmail: name === EMAIL_KEY,
      isPassword: name === PASSWORD_KEY,
    });

    if (!isNil(valid)) errors.push(valid);

  }

  if (!isEmpty(errors)) return errors.reduce((acc, field) => ({ ...acc, ...field }), {});
}


const validateField = ({
  name,
  value,
  isEmail,
  isPassword,
}) => {
  if (isEmpty(value)) {
    return { [`${name}Error`]: `${name.charAt(0).toUpperCase() + name.slice(1)} can not be empty` }
  }

  if (isEmail) {
    return value.match(EMAIL_REGEX) ? null : { [`${name}Error`]: `Email field is not valid` }
  }
}
