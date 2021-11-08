import React from 'react';
import Tour from './Tour';

function Tours({tours ,removetour}) {
    return (
        <section>
            <div className="title">
                <h1>Our Tours</h1>
                <div className="underline" />
            </div>

            <div>
                {tours.map((tour)=>{
                        return <Tour key={tour.id} {...tour} removetour={removetour}></Tour>
                  }
                )}
            </div>
        </section>
    )
}

export default Tours
