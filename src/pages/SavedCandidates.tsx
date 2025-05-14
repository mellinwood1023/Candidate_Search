
const clearUserInfo = (key: string = 'userInfo') => {
  try {
  localStorage.removeItem('userInfo');
  console.log('User info cleared');
  window.location.reload();
} catch (error) {
  console.error('Error clearing user info:', error);
}
}

const SavedCandidates = () => {
  const userData = JSON.parse(localStorage.getItem('userInfo') || '[]');
  return (
    <>
    <button onClick={() => clearUserInfo()} style={{ margin: '10px'}}> Clear Users </button>
      <h1>Potential Candidates</h1>
      <div>
        {userData.map((user: { login: string; avatar_url: string; html_url: string }) => (
          <div key={user.login} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={user.avatar_url} alt={user.login} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
            
          </div>

        ))}
      </div>
    </>
  );
};

export default SavedCandidates;
