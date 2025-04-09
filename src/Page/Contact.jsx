import React from 'react'
import '../Scss/contact.scss'
export default function Contact() {
    return (
        <div className="container-fluid">
            <h1 className='text-center mt-5 text-header-contact'>LIÊN HỆ</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-info" style={{backgroundColor:"#d9d9d9"}}>
                        <div className="info-item">
                            <h3>Địa chỉ</h3>
                            <p>353 ĐT848, Tân Khánh Đông, Sa Đéc, Đồng Tháp, Việt Nam</p>
                        </div>
                        <div className="info-item">
                            <h3>Số điện thoại</h3>
                            <p>+84 953985989</p>
                        </div>
                        <div className="info-item">
                            <h3>E-mail</h3>
                            <p>sadecgarden@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <h3>Giờ mở cửa</h3>
                            <p>Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="" style={{backgroundColor:"#d9d9d9"}}>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className='contact-title'>Liên hệ bổ sung</h2>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="">Tên của bạn</label>
                                <input type="text"  className='rounded-pill' />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text"  className='rounded-pill' />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="">Địa chỉ Email</label>
                                <input type="email"  className='rounded-pill' />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="">Nội dung</label>
                                <textarea name="" id="" cols="30" rows="10" className='rounded-5'></textarea>
                            </div>
                            <div className="col-md-12">
                                <button type="submit">Gửi</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}