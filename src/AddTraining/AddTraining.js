import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

const AddTraining = ({addTraining}) => {
    const [form, setForm] = useState({
        date: '',
        distance: '',
        id: ''
    });

    const trainingData = (evt)=>{
        evt.preventDefault();
        const data = {
            date: new Date(form.date).toLocaleDateString(),
            distance: Number(form.distance),
            id: nanoid()
        }
        addTraining(data);
    }

    const handleChangeForm = evt =>{
        const {name, value} = evt.target;
        setForm(prevForm =>({...prevForm, [name]:value }))
    }

    return (
        <form onSubmit={trainingData}>
            <label htmlFor="date-form">Дата (ДД.ММ.ГГ)</label>
            <input name="date" type="date" value={form.date} onChange={handleChangeForm}/>
            <label htmlFor="distance">Пройдено км</label>
            <input name='distance' type="number" value={form.distance} onChange={handleChangeForm}/>
            <button>OK</button>
        </form>
    );
};

AddTraining.propTypes = {
    addTraining: PropTypes.func.isRequired
};

export default AddTraining;