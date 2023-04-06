import React, { useEffect, useState } from 'react';

import fetchUsersRecords from '../../../utils/apis/User';
import TopNav from '../../../components/blocks/topnav';
import Card from '../../../components/common/card';
import numberFormat from '../../../utils/formatNumber';

import UserIcon from '../../../assets/images/users.png';
import UsersIcon from '../../../assets/images/guarantors.png';
import LoanIcon from '../../../assets/images/loan.png';
import MoneyIcon from '../../../assets/images/money.png';
import Sidebar from '../../../components/blocks/sidebar';

type Props = {};

type StatsType = {
  id: number;
  title: string;
  value: number;
  icon: any;
};

const stats = [
  { id: 0, title: 'Users', value: 2453, icon: UserIcon },
  { id: 1, title: 'Active Users', value: 2453, icon: UsersIcon },
  { id: 2, title: 'Users with Loans', value: 12453, icon: LoanIcon },
  { id: 3, title: 'Users with Savings', value: 102453, icon: MoneyIcon },
] as StatsType[];

const Dashboard = (props: Props) => {
  const [usersRecords, setUsersRecords] = useState<{
    [key: string]: any;
  } | null>();
  const getUsersRecords = async () => {
    try {
      const res = await fetchUsersRecords();
      setUsersRecords(res);
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUsersRecords();

    return () => {
      setUsersRecords(null);
    };
  }, []);

  return (
    <div className='relative flex flex-col'>
      <TopNav />
      <main>
        <Sidebar />
        <section className='main_content'>
          <div className='heading'>
            <h1>User</h1>
          </div>
          <div className='gap-14 stats'>
            {stats.map(({ id, icon, title, value }: StatsType) => (
              <Card key={id}>
                <div className='card_icon'>
                  <img src={icon} alt='icon' />
                </div>
                <h4>{title}</h4>
                <p>{numberFormat(value)}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
