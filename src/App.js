import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Addshop from './addshop/Addshop';
import Shopinfo from './shopinfo/Shoplist';
import ShowMain from './Main/ShowMain';
import Infoppl from './infoppl/Infoppl'; 
import SignUp from './Main/signUp';
import ShowShop from './ShowShop/shop_detail';
import Chatting from './chat/Chatting';
import Appointment from './appoin/appointment'; // 오타 수정: appoinment -> appointment

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<ShowMain />} />   
          <Route path="/addshop" element={<Addshop />} />
          <Route path="/shopinfo" element={<Shopinfo />} />
          <Route path="/infoppl" element={<Infoppl />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/showshop" element={<ShowShop />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/appoin" element={<Appointment />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
