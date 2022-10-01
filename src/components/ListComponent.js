import { useState } from 'react';
import './ListComponent.css'

function ListComponent({data, loading}) {

    // const [all, setAll] = useState([]);

    return (
        <>
            <div className='all-list'>
                <h2>Lista de tarefas:</h2>
                {loading && <p>Carregando ...</p>}
                {/* {data.length === 0 && <p>Não há tarefa</p>} */}
                {data.map((item) => (
                    <div className='map-all' key={item.id}>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListComponent;