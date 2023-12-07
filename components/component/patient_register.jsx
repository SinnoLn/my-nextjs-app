import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Patient_register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/patient_register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
        password,
      }),
    });

    if (response.ok) {
      // 성공적으로 등록되었을 때의 처리
      router.push('/'); // 성공 페이지로 리다이렉트
    } else {
      const result = await response.json(); // 응답 본문을 JSON으로 파싱
      if (result.error === 'UserExists') {
        alert('The email already exists.');
      } else {
        // 오류 처리
        alert('Failed to register patient');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen"> {/* 배경색과 flexbox를 이용한 중앙 정렬 */}
    <Card className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">회원가입</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            아래 양식을 작성해 주세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">이름</Label>
                <Input id="first-name" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">성</Label>
                <Input id="last-name" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">추가 요청 사항</Label>
              <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
    </div>
  );
}
