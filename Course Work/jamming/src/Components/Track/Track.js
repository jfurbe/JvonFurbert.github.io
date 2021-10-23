import './Track.css';
import {useState} from 'react';



export default function Track({track, onAdd, onRemove, isRemoval}) {
    
    const renderAction = ()=> {
        return isRemoval ? <button className="Track-action" onClick={removeTrack}>-</button> :
        <button className="Track-action" onClick={addTrack}>+</button>
    }

    const addTrack = ()=> {
        onAdd(track)
    }
    const removeTrack = ()=> {
        onRemove(track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}