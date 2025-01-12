'use client';

import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import Calendar, {
  Skeleton,
  type Props as ActivityCalendarProps,
  type ThemeInput,
} from 'react-activity-calendar';
import { motion } from 'framer-motion';

export interface Activity {
  date: string;
  count: number;
  level: number;
}

export interface ApiResponse {
  contributions: Array<Activity>;
  total: {
    [year: string]: number;
  };
}

export interface ApiErrorResponse {
  error: string;
}

export type Year = string | 'last';

export interface Props extends Omit<ActivityCalendarProps, 'data'> {
  username: string;
  errorMessage?: string;
  throwOnError?: boolean;
  transformData?: (data: Array<Activity>) => Array<Activity>;
  transformTotalCount?: boolean;
  year?: Year;
}

async function fetchCalendarData(username: string, year: Year): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
  );
  const data = (await response.json()) as ApiResponse | ApiErrorResponse;

  if (!response.ok) {
    throw Error(
      `Failed to fetch GitHub data for "${username}": ${(data as ApiErrorResponse).error}`
    );
  }

  return data as ApiResponse;
}

const GitHubCalendar = forwardRef<HTMLElement, Props>(
  (
    {
      username,
      year = 'last',
      labels,
      transformData: transformFn,
      transformTotalCount = true,
      throwOnError = false,
      errorMessage = `Unable to load GitHub contributions for "${username}"`,
      ...props
    },
    ref,
  ) => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(() => {
      setLoading(true);
      fetchCalendarData(username, year)
        .then(setData)
        .catch((err: unknown) => {
          if (err instanceof Error) setError(err);
        })
        .finally(() => setLoading(false));
    }, [username, year]);

    useEffect(fetchData, [fetchData]);

    if (error) {
      if (throwOnError) throw error;
      return (
        <div className="text-red-500 text-sm rounded-lg p-4 bg-red-50">
          {errorMessage}
        </div>
      );
    }

    if (loading || !data) {
      return <Skeleton {...props} loading />;
    }

    const sortedData = transformFn 
      ? transformFn(data.contributions)
      : data.contributions.sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );

    const defaultLabels = {
      totalCount: `${data.total[year === 'last' ? 'lastYear' : year]} contributions in ${
        year === 'last' ? 'the last year' : year
      }`,
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-black rounded-xl shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-white">
            {username}'s GitHub Activity
          </h2>
          <span className="text-sm text-gray-500">
            {year === 'last' ? 'Past Year' : year}
          </span>
        </div>
        <Calendar
          data={sortedData}
          labels={Object.assign({}, defaultLabels, labels)}
          ref={ref}
          totalCount={transformFn && transformTotalCount ? undefined : data.total[year === 'last' ? 'lastYear' : year]}
          {...props}
          theme={minimalistTheme}
          loading={loading}
          maxLevel={4}
          fontSize={12}
        />
      </motion.div>
    );
  },
);

GitHubCalendar.displayName = 'GitHubCalendar';

const minimalistTheme: ThemeInput = {
  light: [
    '#ebedf0', // Empty
    '#9be9a8', // Level 1
    '#40c463', // Level 2
    '#30a14e', // Level 3
    '#216e39', // Level 4
  ],
  dark: [
    '#161b22', // Empty
    '#0e4429', // Level 1
    '#006d32', // Level 2
    '#26a641', // Level 3
    '#39d353', // Level 4
  ],
};

export default GitHubCalendar;