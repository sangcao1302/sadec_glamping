import React from 'react'
import { Link } from 'react-router-dom'
import '../Scss/Header.scss'
export default function Header() {
  return (
    <div className='container-fluid p-0'>
        <nav className="navbar navbar-expand-lg  header-nav p-0">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item py-2 px-5">
                    <Link className="nav-link fs-4" to="/">Trang chủ</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                    <Link className="nav-link fs-4" to="/service">Dịch vụ</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                    <Link className="nav-link fs-4" to="/products">Sự Kiện</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                    <Link className="nav-link fs-4" to="/contact">Liên hệ</Link>
                    </li>
                    <li className="nav-item py-2 px-5">
                    <Link className="nav-link fs-4" to="/image">Hình ảnh</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className='logo w-100 d-flex justify-content-center align-items-center mt-4'>
            <img src="../assets/image/logo.png" alt="" />
        </div>
    </div>
   
  )
}
