import React, { useState } from 'react';

const FormikYup = () => {
  const [form, setForm] = useState({ username: '', age: '' });
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validation = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'İstifadəçi adı qeyd olunmalıdır!!!';
    } else if (values.username.length > 15) {
      errors.username = 'Ən çox 15 karakter uzunluğunda olmalıdır';
    }

    if (!values.age) {
      errors.age = 'Yaş qeyd olunmalıdır!!!';
    } else if (values.age < 18) {
      errors.age = 'Get böyü gəlsin';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(form);

    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify(form));
    } else {
      setFormError(errors);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        {formError.username && <div>{formError.username}</div>}
        <label htmlFor="age">Age</label>
        <input type="text" name="age" value={form.age} onChange={handleChange} />
        {formError.age && <div>{formError.age}</div>}
        <button type="submit">Sign IN</button>
      </form>
    </>
  );
};

export default FormikYup;
