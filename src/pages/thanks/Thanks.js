import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

export default function Thanks() {
  // const [reloaded, setReloaded] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // if (!reloaded) {
  //   //   setReloaded(true);
  //   //   // Điều hướng đến cùng trang để thực hiện làm mới
  //   //   navigate(0);
  //   // }
  //   window.reload
  // }, []);
//   useEffect(() => {
//     // Kiểm tra xem đã reload hay chưa
//     const isReloaded = sessionStorage.getItem('reloaded');
//  console.log(isReloaded)
//     if (!isReloaded) {
//       // Đánh dấu rằng trang đã được load lại
//       sessionStorage.setItem('reloaded', 'true');
//       // Reload trang
//       window.location.reload();
//     }
//   }, []);
// const [hasReloaded, setHasReloaded] = useState(false);

// useEffect(() => {
//   if (!hasReloaded) {
//     setHasReloaded(true);
//     window.location.reload();
//   }
// }, [hasReloaded]);

  return (
    <Container>
        <h1>You have successfully purchased</h1>
        <Link to='/web_ThanhLi/product'>
        <Button>
            Go to Home
        </Button>
        </Link>
        
    </Container>
  )
}
