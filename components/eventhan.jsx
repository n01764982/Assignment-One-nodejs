import { useState } from 'react';

function SubmitHandler() {
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage('Form submitted successfully');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default SubmitHandler();