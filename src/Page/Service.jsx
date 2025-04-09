import React from 'react'
import "../Scss/serve.scss"
export default function Service() {
  return (
    <div className='container-fluid'>
        <div className='text-header-service text-center'>
            <h2>DỊCH VỤ</h2>
            <p>ĐẶT LỀU</p>
        </div>
        <div className='d-flex flex-column '>
            <div className='row border-serve p-5'>
               <div className='col-md-6'>
                <div className='image-serve-1'>
                    <img src="../assets/image/logo.png" alt="" />
                </div>
                    <div className='d-flex justify-content-start gap-3'>
                        <div className='image-detail-serve-1 w-50'>
                            <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width: "100%", height: "100%"}} alt=""/>
                        </div>
                        <div className='image-detail-serve-1 w-50'>
                            <img src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <img src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        </div>
                    </div>
               </div>
               <div className='col-md-6 text-serve-1'>
                <h1 className='mt-3 title-serve'>LỀU YÊN NGỰA</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos quidem dolorem. Iste magnam reprehenderit, ea sed adipisci repellat cupiditate fugiat, omnis ducimus aliquam quos aperiam, quaerat odio unde harum.
                Est commodi optio aspernatur, rem iste quidem blanditiis quia veritatis atque labore illo ipsum sed eaque laudantium deleniti ducimus accusamus corrupti facilis velit nobis assumenda eum recusandae. Possimus, commodi sit!
                At dolorem dolorum quos totam possimus harum, temporibus perferendis alias laborum soluta aut sed dolore optio! Fuga nemo sequi amet maiores doloribus aliquid inventore, vel veritatis impedit laborum porro ipsum.
                Atque, similique deleniti nesciunt quia excepturi voluptatum officia. Delectus cum hic placeat libero quae animi deleniti quod nobis recusandae cumque, ut, quis expedita! Ipsam dicta harum, explicabo ad dolore quis?
                Quae sapiente deleniti rerum. Minima optio quo nobis ducimus eum, molestias facere laudantium possimus magni vel unde natus iure quidem quam nulla voluptas, consequatur quos sint magnam suscipit cum rem.
                Voluptas perspiciatis sint inventore, labore error necessitatibus debitis assumenda nisi, exercitationem, beatae ad esse harum! Delectus, iure! Tempora libero recusandae, placeat natus cum exercitationem quod laboriosam omnis deleniti quia nostrum.
                Exercitationem officiis odit facilis quam saepe, eos tempora modi dolore. Nisi, sed? Aut consectetur harum voluptate quam quos, nobis similique sit necessitatibus eum reprehenderit eius laboriosam, enim, nostrum officiis animi?
                Quas, dolore autem. Recusandae quos ducimus a ullam ipsum velit minus dolorem officiis ut perspiciatis modi aspernatur delectus excepturi dolore obcaecati similique repudiandae, qui vero eligendi, at iusto. Laborum, eligendi?
                Blanditiis, quisquam quam! Pariatur, ipsam, debitis soluta perspiciatis hic ad explicabo nobis ut harum similique et expedita fugiat cupiditate ab quos incidunt! Dignissimos tenetur eum quia beatae debitis et doloremque.
                Libero obcaecati, cumque culpa aut quod at tempora perferendis ipsa blanditiis animi in maxime odio necessitatibus omnis. Veniam quos, recusandae deleniti facilis harum eius tenetur distinctio accusamus cumque reiciendis quibusdam.</p>
                <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}} data-bs-toggle="modal" data-bs-target="#leuyenngua">ĐẶT NGAY</button>
                <div class="modal fade" id="leuyenngua" tabindex="-1"  aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ĐẶT LỀU YÊN NGỰA</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex gap-3'>
                                <div className='image-booking w-75'>
                                    <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{maxWidth: "100%", height: "auto"}}/>
                                </div>
                                <div className='text-booking w-100'>
                                  <div className='row'>
                                      <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="startDate" className="form-label w-50">Từ ngày</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                    <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="endDate" className="form-label w-50">Đến ngày</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                  </div>
                                    <div className="mb-3 row align-items-center">
                                        <div className='col-md-2'>
                                            <label htmlFor="adults" className="form-label" >Số lượng</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <input type="number" className="form-control" id="adults" />
                                            <input type="number" className="form-control mt-3" id="adults" />
                                        </div>
                                        <div className='col-md-2 text-center'>
                                           <p>Người lớn</p>
                                           <p className='mt-4'>Trẻ em</p>
                                        </div>
                                    </div>
                                    {/* <div className="mb-3 d-flex">
                                        <label htmlFor="children" className="form-label">Số lượng trẻ em</label>
                                        <input type="number" className="form-control" id="children" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
               </div>
            </div>    
          <div className='row justify-content-center border-serve mt-5 p-5' >
               <div className='col-md-12 mt-5'>
                <div className='image-serve-2'>
                    <img src="../assets/image/logo.png" alt="" />
                </div>
               </div>
                <div className='col-md-12'>
                    <div className='d-flex'>
                        <div className='w-75'>
                            <h1 className='text-center title-serve'>LỀU BÁN CẦU</h1>
                            <div className='d-flex mt-5 gap-3'>
                                <img src="https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width: "40%", height: "100%"}} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt, dolor, architecto culpa molestias eum cum quis quam, et hic quisquam. Saepe aliquid, est quaerat amet maiores asperiores! Eius, assumenda.</p>
                            </div>
                        </div>
                        <div className='w-25'>
                            <img src="https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  style={{width: "100%", height: "auto"}} alt="" />
                        </div>    
                    </div>
               </div>
               <div className='col-md-6'></div>
               <div className='col-md-6'>
                <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}} data-bs-toggle="modal" data-bs-target="#leubancau">ĐẶT NGAY</button>
                <div class="modal fade" id="leubancau" tabindex="-1"  aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ĐẶT LỀU BÁN CẦU</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex gap-3'>
                                <div className='image-booking w-75'>
                                    <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{maxWidth: "100%", height: "auto"}}/>
                                </div>
                                <div className='text-booking w-100'>
                                  <div className='row'>
                                      <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="startDate" className="form-label w-50">Từ ngày</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                    <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="endDate" className="form-label w-50">Đến ngày</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                  </div>
                                    <div className="mb-3 row align-items-center">
                                        <div className='col-md-2'>
                                            <label htmlFor="adults" className="form-label" >Số lượng</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <input type="number" className="form-control" id="adults" />
                                            <input type="number" className="form-control mt-3" id="adults" />
                                        </div>
                                        <div className='col-md-2 text-center'>
                                           <p>Người lớn</p>
                                           <p className='mt-4'>Trẻ em</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>               </div>
          </div>
           <div className='row  mt-5 border-serve p-5'>
               <div className='col-md-8'>
                <div className='image-serve-3'>
                    <img src="../assets/image/logo.png" alt="" />
                </div>
                  <div className='d-flex mt-5 gap-3'>
                                <img src="https://images.pexels.com/photos/776117/pexels-photo-776117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width: "50%", height: "100%"}} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt, dolor, architecto culpa molestias eum cum quis quam, et hic quisquam. Saepe aliquid, est quaerat amet maiores asperiores! Eius, assumenda.</p>
                            </div>
               </div>
                <div className='col-md-4 mt-5 text-end' >
                    <h1 className='title-serve'>PHÒNG</h1>
                    <h1 className='title-serve'>TRUYỀN</h1>
                    <h1 className='title-serve'>THỐNG</h1>
               </div>
               <div className='col-md-6'></div>
               <div className='col-md-6'>
                 <button type="button" className="btn rounded-pill px-5" style={{backgroundColor:"#3f7d58",color:"#F8E95D"}} data-bs-toggle="modal" data-bs-target="#phongtruyenthong">ĐẶT NGAY</button>
                <div class="modal fade" id="phongtruyenthong" tabindex="-1"  aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">ĐẶT PHÒNG TRUYỀN THỐNG</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex gap-3'>
                                <div className='image-booking w-75'>
                                    <img src="https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{maxWidth: "100%", height: "auto"}}/>
                                </div>
                                <div className='text-booking w-100'>
                                  <div className='row'>
                                      <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="startDate" className="form-label w-50">Từ ngày</label>
                                        <input type="date" className="form-control" id="startDate" />
                                    </div>
                                    <div className="mb-3 d-flex col-md-6 align-items-center">
                                        <label htmlFor="endDate" className="form-label w-50">Đến ngày</label>
                                        <input type="date" className="form-control" id="endDate" />
                                    </div>
                                  </div>
                                    <div className="mb-3 row align-items-center">
                                        <div className='col-md-2'>
                                            <label htmlFor="adults" className="form-label" >Số lượng</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <input type="number" className="form-control" id="adults" />
                                            <input type="number" className="form-control mt-3" id="adults" />
                                        </div>
                                        <div className='col-md-2 text-center'>
                                           <p>Người lớn</p>
                                           <p className='mt-4'>Trẻ em</p>
                                        </div>
                                    </div>
                                    {/* <div className="mb-3 d-flex">
                                        <label htmlFor="children" className="form-label">Số lượng trẻ em</label>
                                        <input type="number" className="form-control" id="children" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>               </div>
          </div>
        </div>
    </div>
  )
}
