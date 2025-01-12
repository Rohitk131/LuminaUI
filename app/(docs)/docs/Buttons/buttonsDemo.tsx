import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const GitHubContributionChart = ({ username }) => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get(`https://github-contributions-api.deno.dev/${username}`);
        const data = response.data.contributions;
        const formattedData = data.map(day => ({
          date: day.date,
          count: day.contributionCount,
        }));
        setContributions(formattedData);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, [username]);

  // Define a color scale for the heatmap
  const getColorScale = (count) => {
    if (count === 0) return '#ebedf0'; // No contributions
    if (count < 3) return '#9be9a8'; // Light green
    if (count < 6) return '#40c463'; // Medium green
    if (count < 10) return '#30a14e'; // Dark green
    return '#216e39'; // Very dark green
  };

  return (
    <div>
      <h2>GitHub Contribution Chart for {username}</h2>
      <CalendarHeatmap
        startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
        endDate={new Date()}
        values={contributions}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-filled`;
        }}
        tooltipDataAttrs={(value) => ({
          'data-tip': value.date ? `${value.date}: ${value.count} contributions` : 'No contributions',
        })}
      />
      <ReactTooltip />
    </div>
  );
};

export default GitHubContributionChart;