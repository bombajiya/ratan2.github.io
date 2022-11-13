import React from 'react'

const Menucard = ({ menuValue }) => {
    console.log(menuValue);
    return (
        <>
        <section className='main-card--container'>

        {/* mapping=> const newarr = menuValue.map((curElem, indexno, arrname) =>{
            return indexno;
        } )*/}

            {menuValue.map((curElem) => {  
                 const {id, image, name, category}  = curElem ;   // called distructuring.          
                return (
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className='card-auther subtle'>{category}</span>
                                    <h2 className=' card-title'>{name}</h2>
                                    <span className='card description subtle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi hic aliquam vitae quibusdam officia voluptatum iste nostrum non eaque.</span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="" className='card media' />
                                <span className='card-name subtle'>Order Now</span>
                            </div>
                        </div>
                    </>
                )
            })}
            </section>
        </>
    );
};

export default Menucard
