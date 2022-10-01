import { useEffect, useState } from 'react';
import './FormComponent.css';
import ListComponent from './ListComponent';

const API = 'http://localhost:5000';

function FormComponent () {

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [all, setAll] = useState([]);
    const [loading, setLoading] = useState(false);

    // Esse evento acpntece quando recarrega a pagina
    useEffect(() => {
        async function loadData () {
            setLoading(true)

            const data = await fetch(`${API}/all`, {method: "GET"})
            const response = await data.json()

            setLoading(false)

            setAll(response)
        }

        loadData()
    }, [])

    async function handleSubmit(e){
        e.preventDefault();
        
        const toDo = {
            id: Math.random(),
            title: title,
            time: time,
            done: false
        }

        await fetch(`${API}/all`, {method: "POST", body: JSON.stringify(toDo), headers: {"Content-Type": "application/json"}})

        // adiciona um item ao estado anterior e gera um novo estado
        // assim atualiza alista assim q uma nova tarefa é adicionada
        setAll((prevState) =>[...prevState, toDo]);

        setTitle('')
        setTime('')
    }

    return (
        <div>
            <div className="all-form">
                <h2>Insira sua próxima tarefa:</h2>

                <form onSubmit={handleSubmit}>

                    <div className='form-control'>
                        <label htmlFor='title'>O que você vai fazer ?</label>
                        <input type="text" name="title" placeholder="Título da tarefa" onChange={(e) => setTitle(e.target.value)} value={title || ''} required></input>
                    </div>

                    <div className='form-control'>
                        <label htmlFor='time'>Duração:</label>
                        <input type="text" name="time" placeholder="Tempo estimado (em horas)" onChange={(e) => setTime(e.target.value)} value={time || ''} required></input>
                    </div>

                    <input type="submit" value="Criar tarefa"/>
                </form>
            </div>

            <ListComponent data={all} loading={loading}/>
        </div>
    )
}

export default FormComponent;