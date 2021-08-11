import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    
    useEffect(()=>{
        document.title='404'
    })

    return (
        <div>
            <Header/>
            <div className="container" style={{
                padding:'20rem 0',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center' 
                }}>
                <h1 style={{
                fontSize:'7rem' 
                }}>404</h1>
                <h1 style={{
                    fontSize:'5rem'
                }}>NOT FOUND</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFoundPage;
