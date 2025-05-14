
interface UserCardProps {
    data: {login: string; avatar_url: string; html_url: string};
}

export const UserCard = ({data}: UserCardProps) => {
    const { login, avatar_url} = data;
    return (
        <div className="user-card">
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
        </div>
    );
}