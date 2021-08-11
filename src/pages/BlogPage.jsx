import React,{useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogs from '../mocks/blogs';
import Aos from 'aos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    useEffect(()=>{
        Aos.init({
            duration : 1000
          });
    },[])

    useEffect(()=>{
        document.title='Blog'
    })

    return (
        <>
            <Header />
            <div className="__blogpage">
                <div className="__blog-section">
                    <div className="container">
                        <div className="__text-holder">
                        <div className="__breadcrumb">
                        <span><Link to="/" style={{textDecoration:'none', color:'unset'}}>Home</Link></span>
                        <span> — Contact</span>
                        </div>
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
                                    const { id, img, caption, date, blogname } = element
                                    return (
                                        <div key={index} data-aos="zoom-in-up" className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="item">
                                                <img src={img} alt="" />
                                                <div className="caption">
                                                    <h5>{caption}</h5>
                                                    <span>{blogname} </span>
                                                    <span>{date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className="row d-flex justify-content-between">
                            <span ><ArrowBackIosIcon fontSize='small'/> Older posts</span>
                            <span >Newer posts <ArrowForwardIosIcon fontSize='small'/></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;
