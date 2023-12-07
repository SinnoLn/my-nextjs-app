// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event) {
//       event.preventDefault();
      
//       const formData = new FormData(form);
//       const data = {};
//       formData.forEach((value, key) => { data[key] = value; });
      
//       fetch('/api/patients/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       .then(response => response.json())
//       .then(data => {
//         alert('환자 등록 성공');
//         // 추가로 성공 시 로직을 구현
//       })
//       .catch(error => {
//         alert('환자 등록 실패');
//         console.error('Error:', error);
//       });
//     });
//   });
//
  