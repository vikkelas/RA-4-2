import React, {useState} from 'react';
import './Training.css'
import AddTraining from "../AddTraining/AddTraining";
import ListTraining from "../ListTraining/ListTraining";


function Training() {
    const [training, setTraining] = useState([]);
    const sortDate = (arr)=>(a,b)=>(a[arr])>(b[arr])?1:-1;
    const handleAddTraining = (value)=>{
            const newArr = [];
            let index = false;
            training.forEach(item=>{
                if(item.date===value.date){
                    item.distance+=value.distance
                    newArr.push(item)
                    index = true;
                }  else {
                    newArr.push(item);
                }
            });
            if(!index){
                newArr.push(value)
            }
            const sortArr = newArr.sort(sortDate('date'))
           setTraining(() => [...sortArr]);
    }

    const handleDeleteTraining = (submit,id)=>{
        if(submit==='delete'){
            setTraining(()=>training.filter(item=>item.id!==id))
        }

    }




    return (
        <div className='training'>
            <AddTraining addTraining={handleAddTraining}/>
            <ListTraining training={training} deleteTraining={handleDeleteTraining}/>
        </div>
    );
}

export default Training;