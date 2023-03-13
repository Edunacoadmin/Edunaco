'use client';
// import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SpriteIcon } from '../icon/Icon';
import { Button } from './button/Button';

export interface ReturnFormProps {
  title: string;
  text: string;
  icon?: SpriteIcon;
  status?: 'OK' | 'ERR'
}
export interface FormProps {
  shema?: any;
  className?: string;
  onSubmit: any;
  values?: any;
  showSaveButton?: boolean;
  buttonLabel?: string;
  serverError?: string | null;
  children: React.ReactNode;
}

export const Form: FC<FormProps> = function ({
  shema,
  className,
  onSubmit,
  values,
  showSaveButton = false,
  buttonLabel = 'Save',
  serverError,
  children
}) {
  const formMethods = useForm({
    // resolver: shema != null ? yupResolver(shema) : undefined,
    defaultValues: values
  });
  const [loaded, setLoaded] = useState(false);
  const { setValue, formState, handleSubmit, getValues, reset } = formMethods;

  if (values) {
    const supported = getValues();
    if (!loaded) {
      for (const key in values) {
        const value = values[key];
        if (supported[key] != null) {
          setValue(key, value);
        }
      }
      setLoaded(true);
    }

  }

  // const formOnSubmit = async (data) => {
  //   await onSubmit(data);
  // }

  return (
    <FormProvider {...formMethods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
        {showSaveButton && <Button disabled={!formState.isDirty} label={buttonLabel} type='submit' />}
        {serverError != null && <div className='text-sm text-red font-medium opacity-48 mt-4'>{serverError}</div>}
      </form>
    </FormProvider>
  );
};
