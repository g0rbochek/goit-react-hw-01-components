import { Profile } from './profile/Profile';
import user from '../data/user.json';

import { Statistics } from './statistics/Statistics'
import data from '../data/data.json'

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'

import {TransactionHistory} from './TransactionHistory/TransactionHistory'
import transactions from '../data/transactions.json'


export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title='Upload stats' stats={data} />
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions}/>
  </>
);
