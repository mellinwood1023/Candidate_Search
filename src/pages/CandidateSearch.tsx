import { useState } from 'react';
import { searchGithub } from '../api/API';
import { searchGithubUser } from '../api/API';
import { UserCard }  from '../components/UserCard';

interface UserCardProps {
  login: string; avatar_url: string; html_url: string;
}

const CandidateSearch = () => {
  const [userInfo, setUserInfo] = useState({
    login: '',
    avatar_url: '',
    html_url: '',
  });
  const getSpecificUserInfo = async () => {
    const userInfo = await searchGithub();
    const userData = await searchGithubUser(userInfo[0].login);
    setUserInfo (userData);
  }

  const saveUserInfo = async () => {
    let existingUserInforaw = localStorage.getItem('userInfo');
    let existingUserInfo = JSON.parse(existingUserInforaw || '[]') as UserCardProps[];
    existingUserInfo.push(userInfo);
    // if (typeof existingUserInfo === 'string') {
    //   existingUserInfo = JSON.parse(existingUserInfo) as string[];
    // }
    // if (existingUserInfo === null) {
    //   existingUserInfo = [];
    // }
    // if (!Array.isArray(existingUserInfo)) {
    //   // @ts-expect-error
    // existingUserInfo.push(userInfo);
    // }
    localStorage.setItem('userInfo', JSON.stringify(existingUserInfo));

  }

  console.log(searchGithub());
  return (
  <div>
  <h1>CandidateSearch</h1>
  <UserCard data={userInfo}></UserCard>
  <button onClick={getSpecificUserInfo}>Get New Candidate</button>
  <button onClick={saveUserInfo}>Save Candidate</button>
  </div>);
};

export default CandidateSearch;
