import React from 'react';
import PropTypes from 'prop-types';
import './ListTraining.css'



const ListTraining = ({training, deleteTraining}) => {
    const submitItem = (evt)=>{
        evt.preventDefault();
        if(evt.target.name ==='delete'){
            deleteTraining('delete', evt.currentTarget.id);
        }
        if(evt.target.name ==='change'){
            deleteTraining('change', evt.currentTarget.id);
        }
    }
    return (
        <>
            <div className="title-training">
                <div className="title-date">Дата(ДД.ММ.ГГ)</div>
                <div className="title-distance">Дистанция</div>
                <div className="title-actions">Действия</div>
            </div>
            <ul className='list-training'>
                {training
                    .map(item=>
                        <li id={item.id} className='training-item' key={item.id} onClick={submitItem}>
                            <div id='date' className="item-date">{item.date}</div>
                            <div id='distance' className="item-distance">{item.distance}км</div>
                            <div className="item-btn">
                                <button name='change' className='btn btn-pencil'/>
                                <button name='delete' className='btn btn-garbage'/>
                            </div>
                        </li>)}
            </ul>
        </>

    );
};

ListTraining.propTypes = {
    training: PropTypes.array.isRequired,
    deleteTraining: PropTypes.func.isRequired
};

export default ListTraining;