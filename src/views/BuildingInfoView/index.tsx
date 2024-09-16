'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import Map from '@/components/ui/Map';

interface Values {
  buildingNumber: number;
  plotNumber: number;
  blockNumber: number;
  way: string;
  area: string;
  streetNumber: number;
  phoneNumber: number;
  ownerName: string;
  idNumber: string;
  idScannedDocuments: string;
  fullName: string;
  idNumberPA: string;
  powerOfAttorneyDocuments: string;
  publicId: string;
}

const BuildingInfoView = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  const handleMapClick = (lat: number, lng: number) => {
    setLocation({ lat, lng });
    console.log(`Clicked location: Latitude ${lat}, Longitude ${lng}`);
  };

  const formik = useFormik<Values>({
    initialValues: {
      buildingNumber: 0,
      plotNumber: 0,
      blockNumber: 0,
      way: '',
      area: '',
      streetNumber: 0,
      phoneNumber: 0,
      ownerName: '',
      idNumber: '',
      idScannedDocuments: '',
      fullName: '',
      idNumberPA: '',
      powerOfAttorneyDocuments: '',
      publicId: '',
    },
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
      <div className='mx-4 space-y-3'>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <label
              htmlFor='buildingNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Building Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='buildingNumber'
                id='buildingNumber'
                placeholder='Enter Building Number'
                value={formik.values.buildingNumber}
                onChange={formik.handleChange}
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='plotNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Plot Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='plotNumber'
                name='plotNumber'
                value={formik.values.plotNumber}
                onChange={formik.handleChange}
                placeholder='Enter Plot Number'
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='blockNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Block Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='blockNumber'
                name='blockNumber'
                value={formik.values.blockNumber}
                onChange={formik.handleChange}
                placeholder='Block Number'
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor='way'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Way
          </label>
          <div className='mt-2'>
            <input
              type='text'
              id='way'
              name='way'
              value={formik.values.way}
              onChange={formik.handleChange}
              placeholder='Enter Way'
              className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <div>
            <label
              htmlFor='area'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Area
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='area'
                id='area'
                placeholder='Enter Area'
                value={formik.values.area}
                onChange={formik.handleChange}
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='streetNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Street Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='streetNumber'
                name='streetNumber'
                value={formik.values.streetNumber}
                onChange={formik.handleChange}
                placeholder='Enter Street Number'
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='plotNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Plot Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='plotNumber'
                name='plotNumber'
                value={formik.values.plotNumber}
                onChange={formik.handleChange}
                placeholder='Plot Number'
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='ownerName'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Owner Name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='ownerName'
                id='ownerName'
                placeholder='Enter Owner Name'
                value={formik.values.ownerName}
                onChange={formik.handleChange}
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='idNumber'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              ID Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                id='idNumber'
                name='idNumber'
                value={formik.values.idNumber}
                onChange={formik.handleChange}
                placeholder='Enter ID Number'
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            ID Scanned Document
          </label>
          <CldUploadWidget
            uploadPreset='pukxe8xi'
            onSuccess={({ info }) => {
              if (typeof info === 'object' && 'secure_url' in info) {
                formik.setFieldValue('idScannedDocuments', info.display_name);
                formik.setFieldValue('publicId', info.public_id);

                console.log('Upload successful:', info.display_name);
              } else {
                console.error('Upload failed: unexpected info type', info);
              }
            }}
            onError={error => {
              console.error('Upload error:', error);
            }}
          >
            {({ open }) => (
              <button
                type='button'
                onClick={() => open()}
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              >
                Upload Document
              </button>
            )}
          </CldUploadWidget>
        </div>

        <div>
          <label className='block text-sm font-medium leading-6 text-gray-900'>
            Power of Attorney Documents
          </label>
          <CldUploadWidget
            uploadPreset='pukxe8xi'
            onSuccess={({ info }) => {
              if (typeof info === 'object' && 'secure_url' in info) {
                formik.setFieldValue(
                  'powerOfAttorneyDocuments',
                  info.display_name,
                );
                formik.setFieldValue('publicId', info.public_id);

                console.log('Upload successful:', info.display_name);
              } else {
                console.error('Upload failed: unexpected info type', info);
              }
            }}
            onError={error => {
              console.error('Upload error:', error);
            }}
          >
            {({ open }) => (
              <button
                type='button'
                onClick={() => open()}
                className='p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6'
              >
                Upload Power of Attorney Document
              </button>
            )}
          </CldUploadWidget>
        </div>

        <Map onClick={handleMapClick} />

        {location && (
          <div>
            <h3>Selected Location:</h3>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lng}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BuildingInfoView;
