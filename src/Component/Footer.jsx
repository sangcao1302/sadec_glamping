import React from 'react'
import "../Scss/footer.scss"
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className='container-fluid text-center mt-5 py-5' style={{backgroundColor:"#3f7d58"}}>
        <div className='row'>
            <div className='col-md-4'>
                <div className='logo-footer'>
                    <img src="../assets/image/logo.png" alt="" /> 
                </div>
                <div className='icon-footer'>
                    <SocialIcons />
                </div>
            </div>
            <div className='col-md-4 text-center'>
                <div className='contact-text-footer text-white'>
                    <h2>THÔNG TIN LIÊN HỆ</h2>
                    <p>+84 953985989</p>
                    <p>customerservice.sdglamping@gmail.com</p>  
                    <p>353 ĐT848, Tân Khánh Đông, Sa Đéc, Đồng Tháp, Việt Nam</p> 
                </div>
            </div>
            <div className='col-md-4'>
                <div className='map-footer w-100'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0865405402815!2d105.74049397583516!3d10.334959367179822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a7d6bcc90f11d%3A0xfe9ea2782b2b44f5!2zU2EgxJDDqWMgR2xhbXBpbmc!5e0!3m2!1svi!2s!4v1744089647930!5m2!1svi!2s" width="80%" height="300px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
