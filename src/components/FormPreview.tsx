import React from 'react';

const FormPreview: React.FC<{ obj: {} }> = ({ obj }) => {
  return (
    <div>
      <h4 className='text-purple-400 mb-4'>Preview</h4>
      <div className='flex  flex-col gap-6'>
        {Object.entries(obj).map((item, index) => {
          const key = item[0];
          const value = item[1];
          return (
            <div
              key={index}
              className='flex items-start gap-4 bg-purple-200 p-4 rounded-md'
            >
              <span className='capitalize text-3xl'>{key} : </span>
              <div className='flex flex-col gap-2'>
                {typeof value === 'string' && (
                  <span className='lowercase'>{value}</span>
                )}
                {Array.isArray(value) &&
                  value.length > 0 &&
                  value.map(
                    (x, index) =>
                      x.length > 0 && (
                        <span key={index} className='flex items-center gap-3'>
                          <span className='block h-6 w-6 rounded-full bg-purple-500 '></span>
                          {x}
                        </span>
                      )
                  )}

                {!Array.isArray(value) &&
                  typeof value === 'object' &&
                  Object.entries(value).length > 1 &&
                  Object.entries(value).map((item, index) => (
                    <div key={index}>
                      <span>
                        {item[0]} : {item[1]}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPreview;
