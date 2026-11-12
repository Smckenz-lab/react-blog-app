import React, {useState} from 'react';

 export default function ContactPage() {
    const [formData, setFormData] = useState({
        Usename: '',
        Email: '',
        Message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [Username]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.h("Form submitted:", formDate);
        alert("Thanks for your message! We'll reach out as soon as possible!👍")
        setFormData({Username: '', Email:'', Message:''});
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <p> Any questions, concerns, or feedback? Let Us Know🤓</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Username"> Username:</label>
                    <input
                        type="text"
                        id="Username"
                        Username="Username"
                        value={formData.Username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="messgae"> Message: </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}