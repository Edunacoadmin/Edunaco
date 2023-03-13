'use client';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export interface CheckboxProps {
  name: string;
  label: string;
}
export const Checkbox: FC<CheckboxProps> = function ({
  name,
  label = name
}) {
  const [checked, setChecked] = useState(false);
  const { register, formState: { errors } } = useFormContext();


  return (
    <div className="flex items-center">
      <div className='relative h-6 w-6 mr-2'>

        <input
          className="w-6 h-6 border border-blue-200"
          type="checkbox"
          value="true"
          checked={checked}
          id={name}
          {...register(name, {
            onChange: () => setChecked(!checked)
          })}
        />
        {checked && (
          <div className='absolute checkmark cursor-pointer'
            onClick={() => setChecked(!checked)}
          ></div>
        )}
      </div>
      <label
        className="form-check-label inline-block text-xxs font-medium cursor-pointer"
        htmlFor={name}
        dangerouslySetInnerHTML={{ __html: label }}
      >
      </label>
    </div>
  );
};
