// import React, { useState } from 'react';
// import styled from 'styled-components';

// const PopupContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//   z-index: 999;
//   width: 300px;
//   border-radius: 10px;
//   text-align: center;
// `;

// const PopupHeader = styled.div`
//   font-size: 1.5em;
//   font-weight: bold;
//   margin-bottom: 10px;
  
// `;

// const PopupForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  
// `;

// const PopupInput = styled.input`
//   width: 100%;
//   margin-bottom: 10px;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const PopupButton = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const CloseButton = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;
// `;

// const PopupComponent = () => {
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [message, setMessage] = useState('');

//   const toggleForm = () => {
//     setFormVisible(!isFormVisible);
//   };

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Message submitted:', message);
//     setMessage('');
//     toggleForm();
//   };

//   return (
//     <div>
// <img
//   src="https://media.licdn.com/dms/image/D4E03AQHBnANfrvdi7w/profile-displayphoto-shrink_400_400/0/1694519760363?e=1708560000&v=beta&t=Lr2paIinn5sTd1oqTvF4ji_Nkteh0wD6MFJ-6jMaqK8"
//   alt="Live Chat Widget"
//   onClick={toggleForm}
//   style={{
//     cursor: 'pointer',
//     width: '70px',  // تعيين العرض
//     height: '70px', // تعيين الارتفاع
//     borderRadius: '50%',  // جعل الصورة دائرية
//     objectFit: 'cover'  // للتأكد من عدم التشوه عند تغيير النسبة الطولية للصورة
//   }}
// />


//       {isFormVisible && (
//         <PopupContainer>
//           <CloseButton onClick={toggleForm}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="15.001"
//               height="15.001"
//               viewBox="0 0 15.001 15.001"
//             >
//               <path
//                 id="Menu"
//                 d="M586.285 2061.715a.978.978 0 0 1 0-1.381l5.834-5.833-5.834-5.833a.977.977 0 0 1 1.381-1.381l5.833 5.833 5.833-5.833a.977.977 0 0 1 1.381 1.381l-5.834 5.833 5.834 5.833a.977.977 0 0 1-1.381 1.381l-5.833-5.833-5.833 5.833a.977.977 0 0 1-1.381 0z"
//                 transform="translate(-586 -2047)"
//               />
//             </svg>
//           </CloseButton>
//           <PopupHeader>Message Form</PopupHeader>
//           <PopupForm onSubmit={handleSubmit}>
//             <PopupInput
//               type="text"
//               placeholder="Enter your message"
//               value={message}
//               onChange={handleInputChange}
//             />
//             <PopupButton type="submit">Submit</PopupButton>
//           </PopupForm>
//         </PopupContainer>
//       )}
//     </div>
//   );
// };

// export default PopupComponent;
