
import { Inter } from 'next/font/google'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // 입력 값 검사
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter your email and password.');
      return; // 이메일과 비밀번호가 입력되지 않았으면 여기서 함수 실행을 멈춥니다.
    }
  
    try {
      // 서버의 로그인 API 라우트로 POST 요청을 보냅니다.
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // 로그인 성공: 관리자 계정으로 로그인한 경우
        if (email === "admin@gmail.com" && password === "admin") {
          router.push('/admin');
        } else {
          // 그 외 모든 경우에는 환자 메인 페이지로 리다이렉션.
          router.push('/mainpage');
        }
      } else {
        // 로그인 실패: 사용자에게 오류 메시지를 표시.
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">충북대학교 병원 예약 시스템</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button 
            type="button"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={handleLogin}
            >
              로그인
            </button>
          </div>
        </form>
        

        <p className="mt-4 text-sm text-center text-gray-700">
          <ins>저희 병원이 처음이신가요?</ins>{" "}
        
          <button
            onClick={() => router.push('patient_register')} // 'signup'은 회원가입 페이지의 경로입니다.
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              회원가입
            </button>
          </p>
      </div>
    </div>
  );
}
