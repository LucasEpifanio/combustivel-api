import React, { useState } from 'react';
import useDistritos from '../hooks/useDistritos';

const DistritoSelector = () => {
    const { distritos, loading, error } = useDistritos();
    const [selectedDistrito, setSelectedDistrito] = useState(''); // Estado para armazenar o combustível selecionado

    // Função para lidar com a mudança de seleção
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrito(event.target.value);
    };

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems:'flex-start', alignContent:'flex-start', flexDirection:'column' }}>
                <label htmlFor="distrito" style={{ fontSize: '1rem', fontWeight: 'bold' }}>Escolha um distrito: </label>
                <select
                    id="distrito"
                    value={selectedDistrito}
                    onChange={handleSelectChange}
                >
                    <option value="">Selecione um distrito...</option>
                    {distritos.map((item, index) => (
                        <option key={index} value={item.Descritivo}>
                            {item.Descritivo}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DistritoSelector;
