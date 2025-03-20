import '../style/Playlist.css';


import { useState } from 'react';

function Playlist() {
    const [formData, setFormData] = useState({
        weight: '',
        height: '',
        musicGenre: '',
        trainingObjective: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to send formData to the Spotify API
        console.log('User preferences:', formData);
    };



    return (
        <article className="main">
            <form onSubmit={handleSubmit}>

            <article className="userPlaylist">
                
                    <div className='box'>
                        <h1>Características Corporais</h1>
                        <div className='input'>
                            <label>Peso:</label>
                            <input></input>
                        </div>
                        <div className='input'>
                            <label>Altura:</label>
                            <input></input>
                        </div>
                    </div>

                    <div className='box'>
                        <h1>Gêneros Musicais:</h1>
                        <p>Escolha suas preferências musicais abaixo</p>

                        <div className='input'>
                            <select name='musicGender' id='musicGender'>
                                <option>Rock</option>
                                <option>Phonk</option>
                                <option>Eletrônica</option>
                                <option>Funk</option>
                                <option>Pop</option>
                            </select>
                        </div>

                        <div className='box'>
                            <div className='input'>
                                <button type='submit'>Gerar Playlist</button>

                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h1>Objetivo do Treino:</h1>
                        <p>Escolha objetivo do seu treino de acordo com ele</p>

                        <div className='input'>
                            <select name='musicGender' id='musicGender'>
                                <option>Emagrecimento</option>
                                <option>Hipertrofia</option>
                                <option>Resistência</option>
                                <option>Relaxamento/Hobbie</option>
                            </select>
                        </div>
                    </div>
            </article>
            </form>
        </article>
    )
}

export default Playlist;
