import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

const AddTraining = ({form, changeFor ,addTraining}) => {

    const changeInput = (evt)=>{
        const item = {};
        item.name = evt.target.name;
        item.value = evt.target.value;
        changeFor(item);
    }



    const trainingData = (evt)=>{
        evt.preventDefault();
        const data = {
            date: new Date(form.date).toLocaleDateString(),
            distance: Number(form.distance),
            id: form.id===''? nanoid():form.id
        }
        addTraining(data);
    }



    return (
        <form onSubmit={trainingData}>
            <label htmlFor="date-form">Дата (ДД.ММ.ГГ)</label>
            <input name="date" type="date" value={form.date} onChange={changeInput}/>
            <label htmlFor="distance">Пройдено км</label>
            <input name='distance' type="number" value={form.distance} onChange={changeInput}/>
            <button>OK</button>
        </form>
    );
};

AddTraining.propTypes = {
    addTraining: PropTypes.func.isRequired
};

export default AddTraining;