import React from "react";
import { useRouter } from 'next/router'; // useRouter 훅 임포트


function Patientmain() {

  const router = useRouter(); // useRouter 훅 사용

    // Close 버튼 핸들러
    const handleClose = () => {
        router.push('/mainpage'); // 메인 페이지로 이동
    };
    return (

  <div>
        <div className="modal">
  <div className="modal-header">
    의사 예약하기
  </div>
  
 
  <div className="modal-section">
    <h2>이종훈 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.22 11:00, 월요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    
    <div className="modal-content available">
      <span className="date-time">2023.11.23 13:00, 화요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
   
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.24 15:00, 수요일</span>
      <span className="action">예약불가</span>
    </div>

    <div className="modal-content available">
      <span className="date-time">2023.11.25 13:00, 목요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  </div>
  

  <div className="modal-section">
    <h2>김현우 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.22 11:00, 월요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.23 15:00, 화요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.24 15:00, 수요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.25 11:00, 목요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    
  </div>
  
 
  <div className="modal-section">
    <h2>이태현 원장</h2>
    <div className="modal-content available">
      <span className="date-time">2023.11.22 11:00, 월요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.23 11:00, 화요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
 
    <div className="modal-content unavailable">
      <span className="date-time">2023.11.24 17:00, 수요일</span>
      <span className="action">예약불가</span>
    </div>
    <div className="modal-content available">
      <span className="date-time">2023.11.25 11:00, 목요일</span>
      <span className="action">예약하기 &gt;</span>
    </div>
  </div>
  
  <div className="modal-footer">
                <button className="close-button" onClick={handleClose}>Close</button>
            </div>
</div>
            Footer
            <footer className="bg-gray-800 p-4 text-center text-white">
                <p>© 2023 Company Name. All rights reserved.</p>
            </footer>
      </div>    
    );
  }

export default Patientmain;