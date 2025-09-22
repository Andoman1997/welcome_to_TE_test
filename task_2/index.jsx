import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
    const makeLog = useCallback(() => {
        console.log('hi from MainComponent');
    }, []);

    return (
        <Fragment>
            <ChildComponent makeLog={makeLog} />
        </Fragment>
    );
};

const ChildComponent = memo(({ makeLog }: { makeLog: () => void }) => {
    return <button onClick={makeLog}>say Hi from ChildComponent</button>;
});

export { MainComponent, ChildComponent };
