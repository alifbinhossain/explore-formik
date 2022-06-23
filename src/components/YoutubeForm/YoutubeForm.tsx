import { useFormik } from 'formik';
import React from 'react';

const YoutubeForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },

    onSubmit: (values) => {
      console.log('Formik data', values);
    },
  });

  //   console.log('Formik Values', formik.values);

  return (
    <div className='h-screen bg-purple-50 flex items-center justify-center'>
      <form
        className=' bg-blue-300 p-6 rounded-md flex flex-col gap-8'
        onSubmit={formik.handleSubmit}
      >
        <div className='flex justify-between'>
          <label htmlFor='name' className='mr-5'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='focus:outline-none px-4 py-2 rounded-md'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className='flex justify-between'>
          <label htmlFor='email' className='mr-5'>
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='focus:outline-none px-4 py-2 rounded-md'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className='flex justify-between'>
          <label htmlFor='channel' className='mr-5'>
            Channel
          </label>
          <input
            type='text'
            id='channel'
            name='channel'
            className='focus:outline-none px-4 py-2 rounded-md'
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
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
