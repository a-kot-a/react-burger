import { useState } from 'react';

export const useForm = (inputValues={}) => {
  const [values, setValues] = useState<{ [key: string]: string }>(inputValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setValues({...values, [name]: value});
  };

  return { values, handleChange, setValues };
}
