/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/K7Lm5ql
 */
import Link from "next/link"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function Admin() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');

  const router = useRouter();

  const handleDoctorRegister = async (event) => {
    event.preventDefault();
    // API 엔드포인트에 POST 요청을 보냅니다.
    const response = await fetch('/api/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        specialty,
      }),
    });

    if (response.ok) {
      // 의사 등록 성공
      alert('Doctor registered successfully');
      router.push('/some-admin-page'); // 관리자 페이지로 리다이렉트
    } else {
      // 의사 등록 실패
      alert('Failed to register doctor');
    }
  };

  return (
    (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">충북대학교 병원 관리 메뉴</div>
          <div className="flex space-x-4">
            <Link href="#">
             
                <IconDashboard className="h-6 w-6 text-white" />
                <span className="sr-only">Dashboard</span>
              
            </Link>
            <Link href="#">
             
                <IconUsers className="h-6 w-6 text-white" />
                <span className="sr-only">Users</span>
              
            </Link>
            <Link href="#">
              
                <IconSettings className="h-6 w-6 text-white" />
                <span className="sr-only">Settings</span>
              
            </Link>
          </div>
        </div>
      </nav>
      <div className="mt-10 flex-grow mb-10">
        <Card className="max-w-2xl mx-auto">
        <form onSubmit={handleDoctorRegister}> {/* 폼에 onSubmit 이벤트 핸들러 추가 */}
          <CardHeader>
            <CardTitle>의료진 등록 메뉴</CardTitle>
            <CardDescription>아래 양식을 작성해 주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">이름</Label>
                  <Input id="firstName" placeholder="jinhoo" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">성</Label>
                  <Input id="lastName" placeholder="bae" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" placeholder="aaa@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" required type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">의사 구분</Label>
                <Select id="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="전문 분야" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem className="hover:bg-gray-100 focus:bg-gray-100 border-b" value="가정의학과">가정의학과</SelectItem>
                      <SelectItem className="hover:bg-gray-100 focus:bg-gray-100 border-b" value="내과">내과</SelectItem>
                      <SelectItem className="hover:bg-gray-100 focus:bg-gray-100 border-b" value="소아청소년과">소아청소년과</SelectItem>
                      <SelectItem className="hover:bg-gray-100 focus:bg-gray-100" value="정신건강의학과">정신건강의학과</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Create User
            </Button>
          </CardFooter>
          </form>
        </Card>
      </div>
      <footer className="bg-gray-800 p-4 text-center text-white">
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>)
  );
}


function IconUsers(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}


function IconDashboard(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>)
  );
}


function IconSettings(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}
