import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import Select from 'react-select';
import './appointment.css';  // 경로를 올바르게 설정

const timeOptions = Array.from({ length: 24 }, (_, hour) => {
  return [
    { value: `${hour}:00`, label: `${hour}:00` },
    { value: `${hour}:30`, label: `${hour}:30` },
  ];
}).flat();

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState({ value: '10:00', label: '10:00' });
    const [mark, setMark] = useState([]);
    const [response, setResponse] = useState(null);

    const navigate = useNavigate();

    const { data } = useQuery(
        ["logDate"],
        async () => {
            const result = await axios.get(
                `/api/healthLogs?health_log_type=DIET`
            );
            return result.data;
        },
        {
            onSuccess: (data) => {
                setMark(data); // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
            },
        }
    );

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

    const handleTimeChange = (selectedTime) => {
        setTime(selectedTime);
    };

    const handleSubmit = async () => {
        if (!date || !time) {
            alert('날짜와 시간을 선택해 주세요.');
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date, time: time.value }),
            });
            const result = await res.json();
            setResponse(result.message);
        } catch (error) {
            console.error('Error:', error);
            setResponse('에러가 발생했습니다.');
        }
    };

    return (
        <div className="appointment-container">
            <div className="header-container">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <IoIosArrowRoundBack size={30} />
                </button>
                <h2 className="header-title">예약 설정</h2>
            </div>
            <div className="calendar-container">
                <label>날짜 선택:</label>
                <Calendar
                    onChange={handleDateChange}
                    formatDay={(locale, date) => moment(date).format('DD')}
                    value={date}
                    minDetail="month"
                    maxDetail="month"
                    showNeighboringMonth={false}
                    className="calendar"
                    tileContent={({ date, view }) => {
                        let html = [];
                        if (mark.find((x) => x === moment(date).format('YYYY-MM-DD'))) {
                            html.push(<div className="calendar-dot" key={date.toString()}></div>);
                        }
                        return (
                            <div className="calendar-absolute-div">
                                {html}
                            </div>
                        );
                    }}
                />
                <p className="selected-date">{moment(date).format('YYYY년 MM월 DD일')}</p>
            </div>
            <div className="time-picker-container">
                <label>시간 선택:</label>
                <Select
                    options={timeOptions}
                    onChange={handleTimeChange}
                    value={time}
                    className="time-select"
                />
            </div>
            <button className="submit-button" onClick={handleSubmit}>확인</button>
            {response && <p className="response-message">{response}</p>}
        </div>
    );
};

export default Appointment;
