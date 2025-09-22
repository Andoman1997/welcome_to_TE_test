import React, { Component, memo } from 'react';

type IUser = {
    name: string;
    age: number;
};

type IProps = {
    user: IUser;
};

// functional component
const FirstComponent = memo(
    ({ name, age }: IUser) => {
        return (
            <div>
                my name is {name}, my age is {age}
            </div>
        );
    },
    (prev, next) => prev.name === next.name && prev.age === next.age
);

// functional component
const SecondComponent = memo(
    ({ user: { name, age } }: IProps) => {
        return (
            <div>
                my name is {name}, my age is {age}
            </div>
        );
    },
    (prev, next) =>
        prev.user.name === next.user.name && prev.user.age === next.user.age
);

// class component
class ThirdComponent extends Component<IUser> {
    shouldComponentUpdate(nextProps: IUser) {
        return (
            this.props.name !== nextProps.name ||
            this.props.age !== nextProps.age
        );
    }

    render() {
        return (
            <div>
                my name is {this.props.name}, my age is {this.props.age}
            </div>
        );
    }
}

// class component
class FourthComponent extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        return (
            this.props.user.name !== nextProps.user.name ||
            this.props.user.age !== nextProps.user.age
        );
    }

    render() {
        return (
            <div>
                my name is {this.props.user.name}, my age is {this.props.user.age}
            </div>
        );
    }
}

export { FirstComponent, SecondComponent, ThirdComponent, FourthComponent };
