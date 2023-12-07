import React from "react";
import { useRouter } from 'next/router';


const MainPage = () => {
    const router = useRouter();

    const handleAppointmentClick = () => {
        router.push('/patient_mainpage');
    };
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="border-b-2 py-4 bg-white fixed top-0 left-0 right-0 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-red-600">CBNU</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-800 hover:text-red-500"><b>홈</b></a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500"><b>병원 안내</b></a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500"><b>의사 소개</b></a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500"><b>문의 사항</b></a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500"><b>예약/상담 전화</b></a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <br /><br /><br />
            {/* Main Content */}
            <main className="container mx-auto my-8">
                {/* Main Banner Section */}
                <section className="mb-8">
                    <div className="main-banner text-center py-10">
                        <h2 className="text-4xl font-bold mb-4">중증질환을 책임지는 권역공공의료기관</h2>
                        <p className="mb-6">최고의 의료인재향성, 도전적연구, 책임있는 진료로 공공의료 실천과 국민건강증진을 선도하겠습니다.</p>
                        <br /><br />
                        <button 
                            className="about-btn bg-black text-white font-semibold py-2 px-4 rounded" >예약은 처음이신가요?</button>
        <br />
                    </div>
                </section>

               {/* Card Section */}
               <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">내 예약 상태</h2>
                    <br /><br />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="card flex flex-col justify-between h-48 bg-green-500 text-white rounded-lg shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4" onClick={() => handleAppointmentClick('/patient_mainpage')}>
                            <h3 className="text-lg font-bold">인터넷 진료예약</h3>
                            <p>간단하게 원하는 시간대의 의료진들을 예약하실 수 있습니다.</p>
                            <button className="mt-auto bg-green-500 text-white py-2 px-4 border border-white rounded">
                                자세히 보기
                            </button>
                        </div>
                        {/* Card 2 */}
                        <div className="card flex flex-col justify-between h-48 bg-blue-500 text-white rounded-lg shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4" onClick={() => handleAppointmentClick('/patient_mainpage')}>
                            <h3 className="text-lg font-bold">종합검진 예약</h3>
                            <p>사전예약 서비스로 사전 접수 후 별도 상담을 통해 최정 확정 됩니다.</p>
                            <button className="mt-auto bg-bluen-500 text-white py-2 px-4 border border-white rounded">
                                자세히 보기
                            </button>
                        </div>
                        {/* Card 3 */}
                        <div className="card flex flex-col justify-between h-48 bg-teal-500 text-white rounded-lg shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4" onClick={() => handleAppointmentClick('/patient_mainpage')}>
                            <h3 className="text-lg font-bold">이용안내</h3>
                            <p>오시는 길 및 원내 배치도 정보를 확인하실 수 있습니다.</p>
                            <button className="mt-auto bg-teal-500 text-white py-2 px-4 border border-white rounded">
                                자세히 보기
                            </button>
                        </div>
                        {/* Card 4 */}
                        <div className="card flex flex-col justify-between h-48 bg-indigo-500 text-white rounded-lg shadow transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg p-4" onClick={() => handleAppointmentClick('/patient_mainpage')}>
                            <h3 className="text-lg font-bold">내 진료예약 확인</h3>
                            <p>현재 예약 상태, 이전 진료 내역을 확인하실 수 있습니다.</p>
                            <button className="mt-auto bg-indigo-500 text-white py-2 px-4 border border-white rounded">
                                자세히 보기
                            </button>
                        </div>
                    </div>
                </section>

                <br /><br />
 {/* Latest Hospital News Section */}
 <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">병원 소식</h2>
                    <br /><br />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        {/* News Item 1 */}
                        <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">CBNU병원 감사협의회 사회공헌활동 전개</h3>
                                <p className="text-gray-600">사진-(좌측부터) 소망의 집 서광석 원장, CBNU 대학 병원 김정태 상임감시-지역 장애인 시설에 후원금 100만원 절달 CBNU병원(변원장 김태호) 감사실(상임감사 김정태)은 16일 감사협의회...</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                                {/* News Item 2 */}
                                <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">지역암센터 11월 췌장암의 날 행사 개최</h3>
                                <p className="text-gray-600">CBNU병원 암센터(소장 이종훈)는 14일과 15일 양일 간 11월 세계 췌장암의 날을 맞이해 암 예방과 조기 검진의 중요성을 알리기 위한 원내 캠페인과 건강강좌를....</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                                {/* News Item 3 */}
                                <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">외상센터 심포지엄 종료</h3>
                                <p className="text-gray-600">CBNU대학교병원(병원장 최영석) 외상센터(센터장 윤수영)가 지난 9월 본원 교육인재관 3층 강의실에서 제 4회 2023 외상센터 심포지음을 성공적으로 마쳤다. 이번 심포지엄에는...</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                                {/* News Item 4 */}
                                <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">시각장애인 각막이식 수술지원 협약 첫 환자 수술 성료</h3>
                                <p className="text-gray-600">사진-(왼쪽부터) 안과 정문선 교수, 수혜 환자 정모씨, 정 모시 보호자, 라이온스 클럽 이원선 최장, 이항승 전 회장은 지난 4월 라이온스 클럽과 맺.....</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                                {/* News Item 5 */}
                                <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">지역암센터 지역사회 암 관리 담당자 전문인력교육 실시</h3>
                                <p className="text-gray-600">CBNU병원 지역 암센터(소장 류동희)는 지난 6월 본원 서관 9층 와송홍에서 시군 보건소 암 관리 담당자 전문인력교육을 실시했다. 이번교육은 지역사회에 적합한 암....</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                                {/* News Item 6 */}
                                <div 
                            className="news-card cursor-pointer hover:shadow-lg transition-shadow" 
                            onClick={() => handleAppointmentClick('/news/1')}
                        >
                            <article className="space-y-4 p-4">
                                <h3 className="font-bold text-lg">재난대응 안전한한국훈련 실시</h3>
                                <p className="text-gray-600">CBNU병원(병원장 최영석)은 현장 중심의 재난대응 실전 능력을 확보하기 위해 지난 1일(수)부터 3일(금)까지 사흘간 2023년 CBNU병원 재난 대응 안전한 한국훈련을 실시했다고 밝혔다. 이번 훈련......</p>
                                <div className="text-right">
                                    <span className="text-blue-600 hover:text-blue-800">더 보기</span>
                                </div>
                            </article>
                        </div>
                    </div> 
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t-2 py-4 bg-white">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">&copy; 2023 CBNU Hospital. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
