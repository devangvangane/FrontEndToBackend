import React from 'react'
import AxiosInstance from './Axios'; // Import the custom Axios instance
import { useForm } from 'react-hook-form'; // Import useForm hook for form handling

function Form() {
    // Initialize the form and get register and handleSubmit functions
    const { register ,handleSubmit } = useForm();

    // Function to handle form submission
    const submission = (data) =>{
        // Send a POST request to the backend with form data
        AxiosInstance.post('create/', {
            name: data.name,
            description: data.description
        });
    }
  return (
    // Form element with handleSubmit to manage validation and submission
    <form onSubmit={handleSubmit(submission)} style={{display:'flex', flexDirection:"row"}}>
        {/* Input for name, required field */}
        <input name='name' placeholder='Name'  {...register('name', { required: true })} />
        {/* Input for description, required field */}
        <input name='description' placeholder='Description' {...register('description',{required:true})} />
        {/* Submit button */}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form