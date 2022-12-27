import React from "react";

function InfoCard(props){ 
    return( 
        <div>
            {props.starWarsData.length > 0 ? (
                props.starWarsData.map(info => (
                    <React.Fragment>
                        <h3 className='name'>{info.name}</h3>
                        <p className='height'>{info.height}</p>
                        <p className='mass'>{info.mass}</p>
                        <p className='hair_color'>{info.hair_color}</p>
                        <p className='skin_color'>{info.skin_color}</p>
                        <p className='eye_color'>{info.eye_color}</p>
                        <p className='birth_year'>{info.birth_year}</p>
                        <p className='gender'>{info.gender}</p>
                    </React.Fragment>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default InfoCard;
