import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Formik data', values);
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = 'Invalid Email Format';
  }

  if (!values.channel) {
    errors.channel = 'This field is required';
  }

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // console.log('Formik Values', formik.values);
  // console.log('Formik Error', formik.errors);

  return (
    <div className='h-screen bg-amber-50 flex items-center justify-center'>
      <form
        className=' bg-orange-300 p-6 rounded-md flex flex-col gap-8'
        onSubmit={formik.handleSubmit}
      >
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <label htmlFor='name' className='mr-5'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className=' focus:outline-none px-4 py-2 rounded-md'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          {formik.errors.name && (
            <div className='w-max text-red-600'> {formik.errors.name} </div>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between'>
            <label htmlFor='email' className='mr-5'>
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className=' focus:outline-none px-4 py-2 rounded-md'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          {formik.errors.email && (
            <div className='w-max text-red-600'> {formik.errors.email} </div>
          )}
        </div>

        <div className='flex flex-col gap-2 w-max'>
          <div className='flex justify-between '>
            <label htmlFor='channel' className='mr-5'>
              Channel
            </label>
            <input
              type='text'
              id='channel'
              name='channel'
              className=' focus:outline-none px-4 py-2 rounded-md'
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
          </div>

          {formik.errors.channel && (
            <div className='w-max text-red-600'> {formik.errors.channel} </div>
          )}
        </div>

        <button
          type='submit'
          className='bg-black text-white w-max py-2 px-8 rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default YoutubeForm;
