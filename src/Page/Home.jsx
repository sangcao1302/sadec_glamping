import React from 'react'
import '../Scss/home.scss'
export default function Home() {
  return (
    <div className='container-fluid p-0 mt-5'>
        <div className='img-home'>
            <img src="../assets/image/img-home.png" alt="" />
        </div>  
        <div className='story text-center text-white'>
           <div className='text-story'>
                <h2>Câu chuyện của SA ĐÉC GLAMPING</h2>
                <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellendus a obcaecati dolore dignissimos doloribus vitae quia praesentium adipisci, autem deserunt fugiat sequi iste minima, fugit, laboriosam facilis animi explicabo?
                Commodi repellendus, doloribus eos ducimus reiciendis neque, provident totam hic sed dolorum ea voluptatum aperiam repudiandae numquam esse nam cumque maiores repellat magnam fuga! Id itaque facilis a at enim!
            </p>
           </div>
        </div>
        <div className='serve-home p-0 text-center'>
            <h2 className='text-center mt-5 title-home'>CÁC LOẠI LỀU TẠI SA ĐÉC GLAMPING</h2>
            <button type="button" className="btn rounded-pill   mt-3 btn-home" >ĐẶT LỀU NGAY</button>
            <div className='row mt-5' >
                <div className='col-md-2' >
                   <div className=' w-100 py-5' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                    <h2 className='serve-home-title'>Lều yên ngựa</h2>
                    <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}}>ĐẶT NGAY</button>
                   </div>
                </div>
                <div className='col-md-10' >
                     <div className=' w-100' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>  
                   </div>
                </div>
            </div>
             <div className='row mt-5' >
               
                <div className='col-md-10' >
                     <div className=' w-100' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>  
                   </div>
                </div>
                 <div className='col-md-2' >
                   <div className=' w-100 py-5' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                    <h2 className='serve-home-title'>Lều bán cầu</h2>
                    <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}}>ĐẶT NGAY</button>
                   </div>
                </div>
            </div>
        </div>
        <div className='traditional-room text-center p-0 mt-5'>
            <div className='row'>
                <div className='col-md-12' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                    <h2 className='mt-5 serve-home-title'>Phòng truyền thống</h2>
                    <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}}>ĐẶT NGAY</button>
                </div>
            </div>
        </div>
        <div className='map mt-5 p-5' style={{backgroundColor:"#d9d9d9"}}>
            <div className='row '>
                <div className='col-md-8'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0865405402815!2d105.74049397583516!3d10.334959367179822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a7d6bcc90f11d%3A0xfe9ea2782b2b44f5!2zU2EgxJDDqWMgR2xhbXBpbmc!5e0!3m2!1svi!2s!4v1744089647930!5m2!1svi!2s" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 ,borderRadius: "15px"}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sa Đéc Glamping Location"
                       
                    ></iframe>
                </div>
                <div className='col-md-4'>
                    <h2 className='map-home-title'>ĐỊA CHỈ SA ĐÉC GLAMPING</h2>
                    <p className='map-home-address'>353 ĐT848, Tân Khánh Đông, Sa Đéc, Đồng Tháp, Việt Nam</p>
                </div>
            </div>
        </div>
        <div className='activity mt-5'>
            <h2 className='text-center activity-title'>Những hoạt động tại SA ĐÉC GLAMPING</h2>
            <div className='row g-4 mt-2'>
                <div className='col-md-4'>
                    <div className='p-2' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla vel, possimus ea, neque qui numquam minus labore ducimus distinctio perferendis accusamus iste animi eum impedit eius! Inventore ex nulla eum?</p>
                    </div>
                 
                </div>
                <div className='col-md-4'>
                      <div className='p-2' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla vel, possimus ea, neque qui numquam minus labore ducimus distinctio perferendis accusamus iste animi eum impedit eius! Inventore ex nulla eum?</p>
                    </div>
                </div>
                <div className='col-md-4'>
                 <div className='p-2' style={{height: '50vh',backgroundColor:"#d9d9d9"}}>
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla vel, possimus ea, neque qui numquam minus labore ducimus distinctio perferendis accusamus iste animi eum impedit eius! Inventore ex nulla eum?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
