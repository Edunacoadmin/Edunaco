'use client';
import { FC, HTMLInputTypeAttribute, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  info?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  injectedError?: any;
  inGrid?: boolean;
}
// 0.6875rem -- 11px
export const Input: FC<InputProps> = function ({
  name,
  label,
  info,
  required = false,
  type = 'text',
  injectedError,
  placeholder = ''
}) {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div className={'w-full'}>
      <div className={`w-full relative group bg-gray-100 rounded focus-within:outline focus-within:outline-2 focus-within:outline-primary ` +
        (errors[name] != null || injectedError != null ? 'border-red focus-within:outline-0' : 'border-gray')
      }>
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={`w-full h-10 px-4 text-sm peer bg-transparent outline-none`}
          {...register(name)}
        />
        <label htmlFor={name} className="
        ">
          {label}<span className='text-red'>{required && ' *'}</span>
        </label>


      </div>
      {/* {errors[name] != null && <div className='text-xxs text-red font-medium opacity-48 mt-1'>{errors?.[name]?.message || errors?.[name]?.type}</div>} */}
      {injectedError != null && <div className='text-xxs text-red font-medium opacity-48 mt-1'>{injectedError.message}</div>}
      {info != null && <div className='text-xxs text-gray-dark font-medium opacity-48 mt-1'>{info}</div>}
    </div>

  );
};
