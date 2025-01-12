'use client'
import React, { useEffect, useState } from 'react';

const GitHubContributionChart = ({ username, from, to }) => {
  const [contributions, setContributions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Add .json extension to the base URL
        let apiUrl = `https://github-contributions-api.deno.dev/${username}.json`;
        
        // Construct query parameters
        const params = new URLSearchParams();
        if (from) params.append('from', from);
        if (to) params.append('to', to);
        
        // Add query parameters if they exist
        const queryString = params.toString();
        if (queryString) {
          apiUrl += `?${queryString}`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch contributions: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if we actually got contributions data
        if (!data || !Array.isArray(data.contributions)) {
          throw new Error('Invalid data format received from API');
        }
        
        setContributions(data.contributions);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username, from, to]);

  const getColorClass = (count) => {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-200';
    if (count < 6) return 'bg-green-400';
    if (count < 10) return 'bg-green-600';
    return 'bg-green-800';
  };

  const startDate = from ? new Date(from) : new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  const endDate = to ? new Date(to) : new Date();

  if (loading) {
    return <div className="animate-pulse text-gray-600">Loading contributions...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        Error loading contributions: {error}
      </div>
    );
  }

  // Calculate the grid of contributions
  const weeks = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (currentDate <= endDate) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const contribution = contributions.find(c => c.date === dateStr);
        week.push({
          date: dateStr,
          count: contribution ? contribution.contributionCount : 0
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }

  return (
    <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">GitHub Contributions for {username}</h2>
      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-sm ${getColorClass(day.count)}`}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubContributionChart;