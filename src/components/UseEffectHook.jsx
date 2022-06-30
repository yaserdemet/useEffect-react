//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenlerde yan etkileri
//! (sede effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);
// useEffect(() => {
//     //* componentDidMount code || componentDidUpdate */
  
//     return () => {
//       //* componentWillUnmount code */


import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHook = () => {



    const [count , setCount] = useState(0);


    // useEffect(() => {
    //   console.log("mounted");
    //   setTimeout(() => {
    //     alert("count is " );
    //   } , 3000)

    // }, [])

//? didupdate
    
    // useEffect(() => {
    //     console.log("mounted");
    //     setTimeout(() => {
    //       alert("count is " );
    //     } , 3000)
  
    //   }, [])
  
    // console.log("render");

    const fetchData = () => {
        console.log("data fetched");
    }

    useEffect(() => {
     const timerId = setInterval(fetchData , 1000)
     console.log("mounted");

    
      return () => {
     // willunmount
     clearInterval(timerId)

      }
    }, [])
    



  return (
    <div className='container text-center mt-4'>
        <h1>USEEFFECT</h1>
        <h3>count:{count}</h3>
        <button className='btn btn-dark ' onClick={() => setCount(count+1)}>INC</button>
    </div>
  )
}

export default UseEffectHook


