import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dummyMyBookingsData } from '../../assets/assets'

const ManageBookings = () => {
  const [bookings, setBookings] = useState(dummyMyBookingsData)
  const currency = import.meta.env.VITE_CURRENCY || ''

  const formatDate = iso => iso.split('T')[0]

  const handleStatusChange = (id, newStatus) => {
    setBookings(prev =>
      prev.map(b => (b._id === id ? { ...b, status: newStatus } : b))
    )
  }

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title
        title='Manage Bookings'
        subTitle='Track all customer bookings, approve or cancel requests, and manage booking statuses.'
        align='left'
      />

      <div className='mt-8 overflow-x-auto rounded-lg border border-borderColor bg-white'>
        <table className='min-w-full text-sm'>
          <thead className='bg-gray-50'>
            <tr className='text-left text-gray-500'>
              <th className='py-3 px-4 font-medium'>Car</th>
              <th className='py-3 px-4 font-medium'>Date Range</th>
              <th className='py-3 px-4 font-medium'>Total</th>
              <th className='py-3 px-4 font-medium'>Status</th>
              <th className='py-3 px-4 font-medium text-center'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map(b => (
              <tr
                key={b._id}
                className='border-t border-borderColor/70 hover:bg-gray-50'
              >
                {/* Car */}
                <td className='py-3 px-4'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={b.car.image}
                      alt={`${b.car.brand} ${b.car.model}`}
                      className='w-14 h-10 rounded object-cover'
                    />
                    <div>
                      <p className='font-medium text-gray-800'>
                        {b.car.brand} {b.car.model}
                      </p>
                      <p className='text-xs text-gray-500'>
                        {b.car.year} • {b.car.category}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Date range */}
                <td className='py-3 px-4 text-gray-700'>
                  {formatDate(b.pickupDate)} to {formatDate(b.returnDate)}
                </td>

                {/* Total */}
                <td className='py-3 px-4 text-gray-700'>
                  {currency && <span>{currency} </span>}
                  {b.price}
                </td>

                {/* Status badge */}
                <td className='py-3 px-4'>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      b.status === 'confirmed'
                        ? 'bg-green-400/15 text-green-700'
                        : b.status === 'pending'
                        ? 'bg-yellow-300/20 text-yellow-700'
                        : 'bg-red-400/15 text-red-700'
                    }`}
                  >
                    {b.status}
                  </span>
                </td>

                {/* Actions */}
                <td className='py-3 px-4'>
                  <div className='flex items-center justify-center gap-2'>
                    <select
                      value={b.status}
                      onChange={e =>
                        handleStatusChange(b._id, e.target.value)
                      }
                      className='border border-borderColor rounded-md px-2 py-1 text-xs bg-white focus:outline-none'
                    >
                      <option value='confirmed'>Confirmed</option>
                      <option value='pending'>Pending</option>
                      <option value='cancelled'>Cancelled</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className='py-8 px-4 text-center text-gray-500'
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings
