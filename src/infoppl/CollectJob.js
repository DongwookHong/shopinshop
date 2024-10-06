import React from "react";
import "./CollectJob.css"; // 스타일링을 위한 CSS 파일

const jobCategories = {
  "외식·음료": [
    "제과제빵 매장", "일반음식점", "레스토랑", "커피전문점",
    "치킨·피자전문점", "호프·일반주점", "바(bar)","도시락·반찬 가게","기타",
  ],
  "매장관리·판매": [
    "백화점·쇼핑몰", "유통점·마트", "의류·잡화·쥬얼리매장","약국",
    "뷰티·헬스스토어", "휴대폰·전자기기매장", "서점·문구·팬시 매장", "약국", "가구·침구·인테리어 매장",
    "도소매·전통시장", "편의점", "생활용품샵", "스터디룸·독서실·고시원", "PC방","화훼·꽃집"
  ],
  "서비스": [
    "전시·컨벤션·세미나","주유·세차", "골프장", "피부관리·마사지",
    "반려동물샵", "호텔·리조트·숙박", "여행·캠프·레포츠 상점",
    "헤어·미용·네일샵", "결혼·연회·장례도우미", "무인점"
  ]
};

const CollectJob = ({ selectedCategory, setSelectedCategory, selectedJob, setSelectedJob }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedJob(''); // 카테고리 변경 시 업종 선택 초기화
  };

  const handleJobChange = (event) => {
    setSelectedJob(event.target.value);
  };

  return (
    <div className="collect-job-container">
      <label htmlFor="category-select" className="question-label">
        희망하는 업종은?
      </label>
      <div className="select-container">
        <select id="category-select" className="job-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">대분류를 선택하세요</option>
          {Object.keys(jobCategories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select id="job-select" className="job-select" value={selectedJob} onChange={handleJobChange} disabled={!selectedCategory}>
          <option value="">업종을 선택하세요</option>
          {selectedCategory && jobCategories[selectedCategory].map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CollectJob;
