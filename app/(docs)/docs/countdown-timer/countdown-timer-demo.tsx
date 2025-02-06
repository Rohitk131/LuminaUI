import CountdownTimer from "@/components/luminaui/countdown-timer";

const TimerContainer: React.FC = () => {
  const endTime = "2025-02-10T18:00:00"; // Example: February 10, 2025, 6:00 PM

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Event Countdown</h1>
      <p className="mb-2">
        Countdown ends at: {new Date(endTime).toLocaleString()}
      </p>
      <CountdownTimer endTime={endTime} />
    </div>
  );
};

export default TimerContainer;
