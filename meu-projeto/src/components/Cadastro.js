import '../style/Cadastro.css';
import React, { useState } from 'react';

function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        password: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/saveDate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            // Handle success
            console.log('Data saved successfully');
        } else {
            // Handle error
            console.error('Error saving data');
        }
    };

    return (
        <article className="main">
            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Cadastro</h2>
                    <div className="input">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>

                    <div className="input">
                        <label htmlFor="date">Data de Nascimento:</label> 
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required/>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                    </div>
                    <div className="input">
                        <label htmlFor="confirmPassword">Confirmar Senha:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword"/>
                    </div>
                    <div className='input'>
                        <label htmlFor='gender'>Gênero: </label>
                        <select name='gender' id='gender' value={formData.gender} onChange={handleChange}>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                    <div className='btn'>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </section>
        </article>
    )
}

export default Cadastro;
