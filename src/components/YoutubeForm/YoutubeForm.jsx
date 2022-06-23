import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Formik data', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('This field is required'),
  channel: Yup.string().required('This field is required'),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // console.log('Formik Values', formik.values);
  // console.log('Formik Error', formik.errors);

  return (
    <div className='h-screen bg-purple-50 flex items-center justify-center'>
      <div>
        <h4 className='text-purple-400 mb-4'>Basic Youtube Form</h4>
        <form
          className=' bg-purple-300 p-6 rounded-md flex flex-col gap-4'
          onSubmit={formik.handleSubmit}
        >
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='name' className='mb-2'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='your name'
                className=' focus:outline-none px-4 py-2 rounded-md'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            {formik.touched.name && formik.errors.name && (
              <div className='w-max text-red-600'> {formik.errors.name} </div>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='email' className='mb-2'>
                Email
              </label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='your@example.com'
                className=' focus:outline-none px-4 py-2 rounded-md'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {formik.touched.email && formik.errors.email && (
              <div className='w-max text-red-600'> {formik.errors.email} </div>
            )}
          </div>

          <div className='flex flex-col gap-2 w-max'>
            <div className='flex flex-col'>
              <label htmlFor='channel' className='mb-2'>
                Channel
              </label>
              <input
                type='text'
                id='channel'
                name='channel'
                placeholder='channel name'
                className=' focus:outline-none px-4 py-2 rounded-md'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.channel}
              />
            </div>

            {formik.touched.channel && formik.errors.channel && (
              <div className='w-max text-red-600'>{formik.errors.channel} </div>
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
    </div>
  );
};

export default YoutubeForm;
