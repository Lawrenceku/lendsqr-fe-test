import React, { ReactNode } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
  FaChartBar,
  FaCoins,
  FaHandshake,
  FaHome,
  FaPiggyBank,
  FaScroll,
  FaUserCheck,
  FaUserCog,
  FaUserTimes,
  FaUsers,
} from 'react-icons/fa';
import { HiBriefcase, HiOutlineClipboardList, HiUsers } from 'react-icons/hi';

import DecisionModelIcon from '../../../assets/images/decision.png';
import PiggyBankIcon from '../../../assets/images/piggy.png';
import LoanRequestsIcon from '../../../assets/images/sack.png';
import UserCheckIcon from '../../../assets/images/user-check.png';
import UserTimesIcon from '../../../assets/images/user-times.png';
import CoinsIcon from '../../../assets/images/coins-solid.png';
import BankIcon from '../../../assets/images/bank.png';
import LoanIcon from '../../../assets/images/loans.png';
import BriefCaseIcon from '../../../assets/images/briefcase.png';
import TransactionIcon from '../../../assets/images/transaction.png';
import GalaxyIcon from '../../../assets/images/galaxy.png';
import UserCogIcon from '../../../assets/images/user-cog.png';
import ScrollIcon from '../../../assets/images/scroll.png';
import ChartIcon from '../../../assets/images/chart-bar.png';
import SliderIcon from '../../../assets/images/sliders.png';
import PercentBadgeIcon from '../../../assets/images/badge-percent.png';
import ClipboardListIcon from '../../../assets/images/clipboard-list.png';
import TireIcon from '../../../assets/images/tire.png';

type SidebarDataType = {
  heading: string;
  links: { id: number; title: string; icon: any }[];
};

const sidebarData = [
  {
    heading: 'Customer',
    links: [
      //     { id: 0, title: 'Users', icon: <HiUsers /> },
      //     { id: 1, title: 'Guarantors', icon: <FaUsers /> },
      //     { id: 2, title: 'Loans', icon: <FaUsers /> },
      //     { id: 3, title: 'Decision Models', icon: <FaHandshake /> },
      { id: 4, title: 'Savings', icon: PiggyBankIcon },
      { id: 5, title: 'Loan Requests', icon: LoanRequestsIcon },
      { id: 6, title: 'Whitelist', icon: UserCheckIcon },
      { id: 7, title: 'Karma', icon: UserTimesIcon },
    ],
  },
  {
    heading: 'Businesses',
    links: [
      { id: 0, title: 'Organization', icon: BriefCaseIcon },
      { id: 1, title: 'Loan Products', icon: LoanIcon },
      { id: 2, title: 'Savings Products', icon: BankIcon },
      { id: 3, title: 'Fees and Charges', icon: CoinsIcon },
      { id: 4, title: 'Transactions', icon: TransactionIcon },
      { id: 5, title: 'Services', icon: GalaxyIcon },
      { id: 6, title: 'Service Account', icon: UserCogIcon },
      { id: 7, title: 'Settlements', icon: ScrollIcon },
      { id: 8, title: 'Reports', icon: ChartIcon },
    ],
  },
  {
    heading: 'Settings',
    links: [
      { id: 0, title: 'Preferences', icon: SliderIcon },
      { id: 1, title: 'Fees and Pricing', icon: PercentBadgeIcon },
      { id: 2, title: 'Audit Logs', icon: ClipboardListIcon },
      { id: 3, title: 'Systems Messages', icon: TireIcon },
    ],
  },
] as SidebarDataType[];

const Sidebar = () => (
  <aside>
    <div className='sidebar_content scrollbar-hide'>
      <div className='organization'>
        <HiBriefcase size={20} />
        <p>Switch Organisation</p>
        <IoIosArrowDown />
      </div>
      <nav className='sidebar_links'>
        <FaHome />
        <p>Dashboard</p>
      </nav>
      <div className='sidebar_menu'>
        {sidebarData.map((data) => (
          <div className='my-6'>
            <h4>{data.heading}</h4>
            <nav>
              <ul>
                {data?.links.map(({ icon, title }: any) => (
                  <li>
                    <img src={icon} alt='icon' loading='lazy' />
                    {title}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar;
