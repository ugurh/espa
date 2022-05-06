import React from 'react'

function OpenClose() {

    const [isOn, setIsOn] = React.useState(false);
    const [timer, setTimer] = React.useState(0);

    React.useEffect(() => {
        let interval;

        if (isOn) {
            interval = setInterval(() => setTimer(timer + 1), 1000,);
        }

        return () => clearInterval(interval);
    }, [isOn]);

    const onReset = () => {
        setIsOn(false);
        setTimer(0);
    };

    return (
        <div>
            {timer}
            <br />
            {!isOn && (
                <button type="button" onClick={() => setIsOn(true)}>
                    Open
                </button>
            )}

            {isOn && (
                <button type="button" onClick={() => setIsOn(false)}>
                    Close
                </button>
            )}

            <button type="button" disabled={timer === 0} onClick={onReset}>
                Reset
            </button>
        </div>
    );
}


export default OpenClose;
