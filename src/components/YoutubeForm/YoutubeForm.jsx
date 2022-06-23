import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
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
  address: Yup.string().required('This field is required'),
});

const YoutubeForm = () => {
  return (
    <div className='h-screen bg-purple-50 flex items-center justify-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // console.log(formik);

          return (
            <div>
              <h4 className='text-purple-400 mb-4'>Basic Youtube Form</h4>
              <Form className=' bg-purple-300 p-6 rounded-md flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col'>
                    <label htmlFor='name' className='mb-2'>
                      Name
                    </label>
                    <Field
                      type='text'
                      id='name'
                      name='name'
                      placeholder='your name'
                      className=' focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                  <ErrorMessage name='name' />
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col'>
                    <label htmlFor='email' className='mb-2'>
                      Email
                    </label>
                    <Field
                      type='text'
                      id='email'
                      name='email'
                      placeholder='your@example.com'
                      className=' focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                  <ErrorMessage name='email' />
                </div>

                <div className='flex flex-col gap-2 w-max'>
                  <div className='flex flex-col'>
                    <label htmlFor='channel' className='mb-2'>
                      Channel
                    </label>
                    <Field
                      type='text'
                      id='channel'
                      name='channel'
                      placeholder='channel name'
                      className=' focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                  <ErrorMessage name='channel' />
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='comments' className='mb-2'>
                      Comments
                    </label>
                    <Field
                      as='textarea'
                      id='comments'
                      name='comments'
                      placeholder='write here..'
                      className='w-full focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                  <ErrorMessage name='comments' />
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='address' className='mb-2'>
                      Address
                    </label>
                    <Field name='address'>
                      {(props) => {
                        console.log(props);
                        const { field, form, meta } = props;
                        return (
                          <div>
                            <input
                              className='focus:outline-none px-4 py-2 rounded-md'
                              {...field}
                            />

                            {meta.touched && meta.error && (
                              <div className='text-red-600'>{meta.error}</div>
                            )}
                          </div>
                        );
                      }}
                    </Field>
                  </div>
                </div>

                <button
                  type='submit'
                  className='bg-black text-white w-max py-2 px-8 rounded-md'
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default YoutubeForm;
