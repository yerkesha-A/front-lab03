import { useState } from 'react';
import UserProfile from './UserProfile';

function UserApp() {
    const [userId, setUserId] = useState(1);

    return (
        <div>
            <h2>User Profiles</h2>
            <button onClick={() => setUserId(1)}>User 1</button>
            <button onClick={() => setUserId(2)}>User 2</button>
            <button onClick={() => setUserId(3)}>User 3</button>

            <UserProfile userId={userId} />
        </div>
    );
}
export default UserApp;
//user id is inclided in the dependency array so that useEffect
//runs again whenever the selected user changes