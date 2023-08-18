import React from 'react'
import "./AllCss/Search.css"

const Search = () => {
  return (
    <div className='search-first-search'>
        <div className='search-first-div-div'>
            <div className='search-first-left'>
              <div className='seeting-div'>
                <div><h2>Friends</h2></div>
                <div><i style={{paddingTop:"10px"}} class="fa-solid fa-gear  fa-xl"></i></div>
              </div>
              <div className='find-friend'>
                <div className='find-icon'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='home-search'><h2>Home</h2></div>
              </div>

              <div className='friend-seggestion'>
              <div className='find-icon-second'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='home-search-second'><b>Friend Request</b></div>
                <div className='arrow-icon'>
                <i class="fa-solid fa-chevron-right fa-xl"></i>
                </div>
              </div>

              <div className='friend-seggestion'>
              <div className='find-icon-second'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='home-search-second'><b>Suggation</b></div>
                <div className='arrow-icon'>
                <i class="fa-solid fa-chevron-right fa-xl"></i>
                </div>
              </div>

              <div className='friend-seggestion'>
              <div className='find-icon-second'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='home-search-second'><b>All Friend</b></div>
                <div className='arrow-icon'>
                <i class="fa-solid fa-chevron-right fa-xl"></i>
                </div>
              </div>

              <div className='friend-seggestion'>
              <div className='find-icon-second'><i class="fa-solid fa-gift fa-xl"></i></div>
                <div className='home-search-second'><b>Birthday</b></div>
                {/* <div className='arrow-icon'>
                <i class="fa-solid fa-chevron-right fa-xl"></i>
                </div> */}
              </div>
              <div className='friend-seggestion'>
              <div className='find-icon-second'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='home-search-second'><b>Custom List</b></div>
                <div className='arrow-icon'>
                <i class="fa-solid fa-chevron-right fa-xl"></i>
                </div>
              </div>
         
            </div>
          
            <div className='search-second-right' >
                <div className='friend-req'>
                <h2>Friend request</h2>
                <button>See ALL</button>
                </div>

                <div className='friend-request'>
                    <div>
                        <img src='https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-1/347116263_577344771168061_7624897153057686815_n.jpg?stp=dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=TPiEeszPDfMAX_pkR_t&_nc_ht=scontent.fbom12-1.fna&oh=00_AfDFYWTip1RsoJgJ511nzqi3c20I2t1pSQJxScJkmGOh6A&oe=64E382D5'/>
                        <b>Pradeep Yadav</b><br/>
                        <button className='button-confirm'>Confirm</button><br/>
                        <button className='button-delite'>Delite</button>
                    </div>
                    <div>
                    <img src='https://scontent.fbom12-1.fna.fbcdn.net/v/t39.30808-6/325997084_928758525201697_359501135673891657_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H0RDQ47DTqkAX8oUtkc&_nc_ht=scontent.fbom12-1.fna&oh=00_AfByXDz2Tgq2oKqV_uFLRXuRWXy1PQSfqkJ_JomNkEzScw&oe=64E3EC05'/>
                        <b>Pankaj Yadav</b><br/>
                        <button className='button-confirm'>Confirm</button><br/>
                        <button className='button-delite'>Delite</button>
                    </div>
                    <div>
                    <img src='https://tse4.mm.bing.net/th?id=OIP.1-KEguXZXTqgDgMzzAGdvAHaIx&pid=Api&P=0&h=180'/>
                        <b>Samiksha Yadav</b><br/>
                        <button className='button-confirm'>Confirm</button><br/>
                        <button className='button-delite'>Delite</button>
                    </div>
                    <div>
                    <img src='https://i.pinimg.com/originals/8a/a6/b8/8aa6b81867200a710e777fb848e9ebc8.jpg'/>
                        <b>Study Motion </b><br/>
                        <button className='button-confirm'>Confirm</button><br/>
                        <button className='button-delite'>Delite</button>
                    </div>
                    <div>
                    <img src='https://i.pinimg.com/736x/90/44/a3/9044a3c3818f6dee55107840fc54fd61.jpg'/>
                        <b>Samiksha Yadav</b><br/>
                        <button className='button-confirm'>Confirm</button><br/>
                        <button className='button-delite'>Delite</button>
                    </div>



                </div>
            </div>
        </div>
        
        
       </div>
  )
}

export default Search