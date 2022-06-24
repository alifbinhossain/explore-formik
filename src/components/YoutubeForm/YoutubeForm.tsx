import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import FormPreview from '../FormPreview';
import TextError from '../TextError';

const YoutubeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    socials: {
      facebook: '',
      instagram: '',
    },
    numbers: ['', ''],
    favoriteChannels: [''],
  };

  const [user, setUser] = useState(initialValues);

  const onSubmit = (values) => {
    setUser(values);
    console.log(user);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string()
      .email('Invalid Email Format')
      .required('This field is required'),
    channel: Yup.string().required('This field is required'),
    address: Yup.string().required('This field is required'),
    socials: Yup.object().shape({
      facebook: Yup.string().required('This field is required'),
      instagram: Yup.string().required('This field is required'),
    }),
  });

  return (
    <div className='min-h-screen bg-purple-50 grid grid-cols-2 py-12 px-[15%] gap-x-16'>
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
                  <ErrorMessage name='name' component={TextError} />
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
                  <ErrorMessage name='email'>
                    {(error) => <div className='text-red-600'>{error}</div>}
                  </ErrorMessage>
                </div>

                <div className='flex flex-col gap-2'>
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
                        // console.log(props);
                        const { field, form, meta } = props;
                        return (
                          <div>
                            <input
                              className='w-full focus:outline-none px-4 py-2 rounded-md'
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

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='facebook' className='mb-2'>
                      Facebook
                    </label>
                    <Field
                      type='text'
                      id='facebook'
                      name='socials.facebook'
                      placeholder='your facebook profile'
                      className='w-full focus:outline-none px-4 py-2 rounded-md'
                    />

                    <ErrorMessage name='socials.facebook' />
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='instagram' className='mb-2'>
                      Instagram
                    </label>
                    <Field
                      type='text'
                      id='instagram'
                      name='socials.instagram'
                      placeholder='your instagram profile'
                      className='w-full focus:outline-none px-4 py-2 rounded-md'
                    />

                    <ErrorMessage name='socials.instagram' />
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='phoneNumber-1' className='mb-2'>
                      Phone Number 1
                    </label>
                    <Field
                      type='text'
                      id='phoneNumber-1'
                      name='numbers[0]'
                      placeholder='phone number 1'
                      className='w-full focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='phoneNumber-2' className='mb-2'>
                      Phone Number 2
                    </label>
                    <Field
                      type='text'
                      id='phoneNumber-2'
                      name='numbers[1]'
                      placeholder='phone number 2'
                      className='w-full focus:outline-none px-4 py-2 rounded-md'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-col'>
                    <label htmlFor='favorite-channels' className='mb-2'>
                      Favorite Channels
                    </label>
                    <FieldArray name='favoriteChannels'>
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;
                        const { favoriteChannels } = values;

                        return (
                          <div className='flex flex-col gap-2 w-full'>
                            {favoriteChannels.map((favoriteChannel, index) => (
                              <div
                                key={index}
                                className='flex items-center gap-6'
                              >
                                <Field
                                  name={`favoriteChannels[${index}]`}
                                  className=' focus:outline-none px-4 py-2 rounded-md'
                                  placeholder={`favorite channel ${index + 1}`}
                                />
                                {index > 0 && (
                                  <button
                                    className='h-10 w-10 rounded-md bg-purple-600 text-white flex items-center justify-center'
                                    type='button'
                                    onClick={() => remove(index)}
                                  >
                                    <span>-</span>
                                  </button>
                                )}
                                <button
                                  className='h-10 w-10 rounded-md bg-purple-600 text-white flex items-center justify-center'
                                  type='button'
                                  onClick={() => push('')}
                                >
                                  <span> + </span>
                                </button>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    </FieldArray>
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

      <FormPreview obj={user} />
    </div>
  );
};

export default YoutubeForm;
