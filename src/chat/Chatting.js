import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Chatting.css";
import personImg from "../img/person.svg"; // 이미지 파일을 임포트

function Chatting() {
  const navigate = useNavigate();
  
  const chatRooms = [
    {
      nickname: "네일샵 분양중",
      location: "가락본동",
      time: "1주 전",
      message: "네!",
      img: personImg,
    },
    {
      nickname: "미용실",
      location: "역삼동",
      time: "1주 전",
      message: "혹시 임대료가 어떻게 될까요?",
      img: personImg,
    },
    {
      nickname: "삼전동 네일숍",
      location: "삼성동",
      time: "2주 전",
      message: "분양 조건은 메일로 보내드렸습니다.",
      img: personImg,
    },
    {
      nickname: "둥둥",
      location: "독산제1동",
      time: "1달 전",
      message: "실내 인테리어 일부를 수정하고 싶어요",
      img: personImg,
    },
    {
      nickname: "그림자",
      location: "삼전동",
      time: "1달 전",
      message: "제가 잠시 일중이어서요",
      img: personImg,
    },
    {
      nickname: "두리안",
      location: "중앙동",
      time: "2달 전",
      message: "방문희망합니다..",
      img: personImg,
    },
    {
      nickname: "대박이다",
      location: "개봉제2동",
      time: "2달 전",
      message: "찾아보고 확인할 수 있을까요",
      img: personImg,
    },
    {
      nickname: "편의점 주인",
      location: "개봉제2동",
      time: "2달 전",
      message: "편의점 내 일부 공간사용가능해요ㄴ",
      img: personImg,
    },
    {
      nickname: "샤넬미용실",
      location: "개봉제2동",
      time: "2달 전",
      message: "편의점 내 일부 공간사용가능해요",
      img: personImg,
    },
   
  ];

  return (
    <div>
      <div className="chatting_header">
        <div className="back_button" onClick={() => navigate(-1)}>←</div>
        <div className="chatting_word">채팅</div>
      </div>
      <div className="chatting_rooms">
        {chatRooms.map((room, index) => (
          <div className="room" key={index}>
            <img src={room.img} alt="person" />
            <div className="room_info">
              <div className="nickname">
                {room.nickname}{" "}
                <span className="location">
                  {room.location} · {room.time}
                </span>
              </div>
              <div className="message">{room.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chatting;
