import React,{useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogs from '../mocks/blogs';
import Aos from 'aos';

const BlogPage = () => {
    useEffect(()=>{
        Aos.init({
            duration : 1000
          });
    },[])

    return (
        <>
            <Header />
            <div className="__blogpage">
                <div className="__blog-section">
                    <div className="container">
                        <div className="__text-holder">
                            <h1>Blog</h1>
                            <h3>As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</h3>
                        </div>
                    </div>
                </div>
                <div className="__items-section">
                    <div className="container">
                        <div className="row">
                            {
                                blogs.map((element, index) => {
                                    const { id, img, caption, date } = element
                                    return (
                                        <div key={index} data-aos="zoom-in-up" className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="item">
                                                <img src={img} alt="" />
                                                <div className="caption">
                                                    <h5>{caption}</h5>
                                                    <span>{date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;
