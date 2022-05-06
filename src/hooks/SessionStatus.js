import React from 'react'

function useOffline() {
    
    const [isOffline, setIsOffline] = React.useState(false);

    function onOffline() {
        setIsOffline(true);
    }

    function onOnline() {
        setIsOffline(false);
    }

    React.useEffect(() => {
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);

        return () => {
            window.removeEventListener('offline', onOffline);
            window.removeEventListener('online', onOnline);
        };
    }, []);

    return isOffline;
}

function SessionStatus() {

    const isOffline = useOffline();

    if (isOffline) {
        return <div>Sorry, you are offline ...</div>;
    }

    return <div>You are online!</div>;
}


export default SessionStatus;