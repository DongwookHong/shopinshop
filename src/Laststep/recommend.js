import React, { useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import './recommend.css';

function RecommendPage() {
    useEffect(() => {
        // 페이지에 진입할 때 배경색 변경
        document.body.style.backgroundColor = "rgb(81, 255, 69)";
        
        // 페이지를 벗어날 때 배경색을 기본값으로 변경
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <div className="recommend">
            <button className="arrow-btn">
                <IoIosArrowRoundBack className="arrow-icon" />
            </button>
            <h3 className="heading">계약을 잘 마치셨나요?</h3>
            <h4 className="heading2">필요한 물품을 추천하고 빌려드려요</h4>
            <button className="stuff-btn">물품 보기</button>
            <button className="rent-btn">렌트 보기</button>
            <button className="interior-btn">인테리어 보기</button>
            <button className="furniture-btn">가구 보기</button>
            <button className="done-btn">Done</button>
        </div>
    );
}

export default RecommendPage;
