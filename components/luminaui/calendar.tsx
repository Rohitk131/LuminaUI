"use client";
import React, { useState } from "react";
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameDay,
    isSameMonth,
} from "date-fns";
import { motion } from "framer-motion";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const prevMonth = () => setCurrentDate((prev) => subMonths(prev, 1));
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const renderDays = () => {
        const startDate = startOfWeek(startOfMonth(currentDate));
        const endDate = endOfWeek(endOfMonth(currentDate));
        const days = [];
        let day = startDate;

        while (day <= endDate) {
            days.push(day);
            day = addDays(day, 1);
        }

        return days.map((day, index) => (
            <motion.div
                drag dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                key={index}
                className={`flex font-oswald items-center justify-center p-2 h-10 w-10 rounded-full cursor-pointer 
          ${isSameMonth(day, currentDate)
                        ? ""
                        : "text-gray-400 hover:text-gray-200"
                    } 
          ${isSameDay(day, selectedDate)
                        ? "bg-zinc-500  font-bold"
                        : "hover:bg-zinc-400"
                    }
          ${isSameDay(day, new Date())
                        ? "bg-yellow-500 text-white font-bold"
                        : ""
                    }
          `}
                onClick={() => setSelectedDate(day)}
            >
                <motion.span whileHover={{
                    scale: 1.3,
                    rotate: [0, -20, 0, 20, 0],
                    transition: { duration: 1 },
                }}>{format(day, "d")}</motion.span>
            </motion.div>
        ));
    };

    return (
        <div className="max-w-md font-oswald mx-auto mt-10 p-4 border rounded-lg shadow-md relative">

            {/* Gradient orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    className="p-2 rounded-md hover:bg-orange-900 relative z-10"
                >
                    ◀
                </button>

                <h2 className="text-lg font-bold">{format(currentDate, "dd MMM yyyy")}</h2>
                <button
                    onClick={nextMonth}
                    className="p-2 rounded-md hover:bg-orange-900"
                >
                    ▶
                </button>
            </div>

            <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
        </div>
    );
};

export default Calendar;
