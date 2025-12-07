import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY || '$'

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    features: '',
    description: '',
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    console.log(car, image)
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title
        title='Add New Car'
        subTitle='Fill in details to list a new car for booking, including pricing, availability, and car specifications.'
      />

      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col gap-6 text-gray-500 text-sm mt-6 max-w-3xl'
      >
        {/* Car Image */}
        <div className='flex items-center gap-3'>
          <label htmlFor='car-image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=''
              className='h-14 w-14 rounded cursor-pointer object-cover'
            />
            <input
              type='file'
              id='car-image'
              accept='image/*'
              hidden
              onChange={e => setImage(e.target.files[0])}
            />
          </label>
          <p className='text-gray-500'>Upload a picture of your car</p>
        </div>

        {/* Brand & Model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label>Brand</label>
            <input
              type='text'
              placeholder='e.g. BMW, Mercedes, Audi...'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.brand}
              onChange={e => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label>Model</label>
            <input
              type='text'
              placeholder='e.g. X5, E‑Class, M4...'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.model}
              onChange={e => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Year, Daily Price, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <label>Year</label>
            <input
              type='number'
              placeholder='2025'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.year}
              onChange={e => setCar({ ...car, year: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label>Daily Price (TK)</label>
            <input
              type='number'
              placeholder='100'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.pricePerDay}
              onChange={e =>
                setCar({ ...car, pricePerDay: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col'>
            <label>Category</label>
            <input
              type='text'
              placeholder='Sedan, SUV, Hatchback...'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.category}
              onChange={e => setCar({ ...car, category: e.target.value })}
            />
          </div>
        </div>
        {/* Transmission, Fuel Type, Seating */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col'>
            <label>Transmission</label>
            <input
              type='text'
              placeholder='Automatic / Manual'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.transmission}
              onChange={e =>
                setCar({ ...car, transmission: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col'>
            <label>Fuel Type</label>
            <input
              type='text'
              placeholder='Petrol / Diesel / Electric'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.fuel_type}
              onChange={e => setCar({ ...car, fuel_type: e.target.value })}
            />
          </div>
          <div className='flex flex-col'>
            <label>Seating Capacity</label>
            <input
              type='number'
              placeholder='5'
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.seating_capacity}
              onChange={e =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>

        {/* Location */}
        <div className='flex flex-col'>
          <label>Location</label>
          <input
            type='text'
            placeholder='e.g. Dhaka, Rajshahi'
            required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={car.location}
            onChange={e => setCar({ ...car, location: e.target.value })}
          />
        </div>

        {/* Features  */}
        <div className='flex flex-col'>
          <label>Features</label>
          <input
            type='text'
            placeholder='e.g. Leather Seats, Navigation, Bluetooth'
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
            value={car.features}
            onChange={e => setCar({ ...car, features: e.target.value })}
          />
        </div>

        {/* Description */}
        <div className='flex flex-col'>
          <label>Description</label>
          <textarea
            rows='4'
            placeholder='Describe your car, its condition, and any notable details...'
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none resize-none'
            value={car.description}
            onChange={e =>
              setCar({ ...car, description: e.target.value })
            }
          ></textarea>
        </div>

        <button
          type='submit'
          className='self-start mt-2 px-6 py-2 rounded-md bg-primary text-white text-sm'
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddCar