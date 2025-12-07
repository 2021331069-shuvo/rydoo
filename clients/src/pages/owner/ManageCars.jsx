import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dummyCarData } from '../../assets/assets'

const ManageCars = () => {
  const [cars, setCars] = useState(dummyCarData)

  const currency = import.meta.env.VITE_CURRENCY || '$'

  const toggleAvailability = id => {
    setCars(prev =>
      prev.map(car =>
        car._id === id ? { ...car, isAvailable: !car.isAvailable } : car
      )
    )
  }

  const handleDelete = id => {
    
    setCars(prev => prev.filter(car => car._id !== id))
  }

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title
        title='Manage Cars'
        subTitle='View all listed cars, update their details, or remove them from the platform.'
        align='left'
      />

      <div className='mt-8 overflow-x-auto rounded-lg border border-borderColor bg-white'>
        <table className='min-w-full text-sm'>
          <thead className='bg-gray-50'>
            <tr className='text-left text-gray-500'>
              <th className='py-3 px-4 font-medium'>Car</th>
              <th className='py-3 px-4 font-medium'>Category</th>
              <th className='py-3 px-4 font-medium'>Price</th>
              <th className='py-3 px-4 font-medium'>Status</th>
              <th className='py-3 px-4 font-medium text-center'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cars.map(car => (
              <tr
                key={car._id}
                className='border-t border-borderColor/70 hover:bg-gray-50'
              >
                {/* Car info */}
                <td className='py-3 px-4'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      className='w-14 h-10 rounded object-cover'
                    />
                    <div>
                      <p className='font-medium text-gray-800'>
                        {car.brand} {car.model}
                      </p>
                      <p className='text-xs text-gray-500'>
                        {car.seating_capacity} seats • {car.transmission}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className='py-3 px-4 text-gray-700'>{car.category}</td>

                {/* Price */}
                <td className='py-3 px-4 text-gray-700'>
                  
                  TK. {car.pricePerDay}
                  <span className='text-xs text-gray-500'>/day</span>
                </td>

                {/* Status badge */}
                <td className='py-3 px-4'>
                  <button
                    type='button'
                    onClick={() => toggleAvailability(car._id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      car.isAvailable
                        ? 'bg-green-400/15 text-green-700'
                        : 'bg-red-400/15 text-red-700'
                    }`}
                  >
                    {car.isAvailable ? 'Available' : 'Not Available'}
                  </button>
                </td>

                {/* Actions */}
                <td className='py-3 px-4'>
                  <div className='flex items-center justify-center gap-3 text-gray-500'>
                    <button
                      type='button'
                      className='hover:text-gray-700'
                      title='Edit'
                    >
                      <img
                        src={assets.edit_icon}
                        alt='edit'
                        className='w-4 h-4'
                      />
                    </button>

                    <button
                      type='button'
                      className='hover:text-gray-700'
                      title='View'
                    >
                      <img
                        src={assets.eye_icon}
                        alt='view'
                        className='w-4 h-4'
                      />
                    </button>

                    <button
                      type='button'
                      onClick={() => handleDelete(car._id)}
                      className='hover:text-red-600'
                      title='Delete'
                    >
                      <img
                        src={assets.delete_icon}
                        alt='delete'
                        className='w-4 h-4'
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {cars.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className='py-8 px-4 text-center text-gray-500'
                >
                  No cars found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars
