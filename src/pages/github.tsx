import React, { useEffect } from 'react';
import { User as UserType } from 'next-auth';
import { useSession } from 'next-auth/react';

import { getLayout } from '@/components/layout/MainLayout';

interface User extends UserType {
  username: string;
}

async function getContributions(token, username) {
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
  console.log('data :', data);
  return data;
}

export default function GithubPage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log('session :', session);
    const token = session?.accessToken;
    const user = session?.user as User;
    const username = user?.username;
    if (token && username) {
      getContributions(token, username).then((data) => {
        console.log(data);
      });
    }
  }, []);
  // const data = await getContributions('token', 'MeiK2333');
  // console.log(data);

  return <div>Github</div>;
}

GithubPage.getLayout = getLayout;
