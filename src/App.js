// import { Routes, Route } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Navbar from './components/Navbar'
// import OrderSummery from './components/OrderSummery'
// import NoMatch from './components/NoMatch'
// import Products from './components/Products'
// import FeaturedProducts from './components/FeaturedProducts'
// import NewProducts from './components/NewProducts'
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='order-summary' element={<OrderSummery />} />
//         <Route path='products' element={<Products />}>
//           <Route path='featured' element={<FeaturedProducts />} />
//           <Route path='new' element={<NewProducts />} />
//         </Route>
//         <Route path='*' element={<NoMatch />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from 'react'
import { useSelector } from '../node_modules/react-redux';
import { dispatch } from '../node_modules/jest-circus/build/state';

function App() {

  const increment = useSelector (state  => {
    return state.increment;
  })
  const incrementHandle = () => {
    dispatch ({type:"INC"})
  }
  return (
    <div>
      <p>{increment}</p>
      <button onClick = {incrementHandle}>increament</button>
    </div>
  )
}

export default App

