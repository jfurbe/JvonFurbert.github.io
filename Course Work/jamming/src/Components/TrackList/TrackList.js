import './TrackList.css';
import Track from '../Track/Track';

export default function TrackList({tracks, onAdd, onRemove, isRemoval}) {
    console.log(tracks)

    return (
        <div className="TrackList">
             {tracks.map((x)=> {
                return (<Track track={x} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval}/>)
            })} 

             
        </div>
    )
}