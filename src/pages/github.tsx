import React, { useEffect } from 'react';
import { User as UserType } from 'next-auth';
import { useSession } from 'next-auth/react';

import { getLayout } from '@/components/layout/MainLayout';

interface User extends UserType {
  username: string;
}

async function getContributions(token: string, username: string) {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                    firstDay
                  }
                }
              }
            }
          }`,
  };
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data;
}

export default function GithubPage() {
  const { data: session } = useSession();

  useEffect(() => {
    const token = session?.accessToken as string;
    const user = session?.user as User;
    const username = user?.username;
    if (token && username) {
      getContributions(token, username).then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
      });
    }
  }, [session]);

  return <div>Github</div>;
}

GithubPage.getLayout = getLayout;
