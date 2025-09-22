interface BallonI {
    id: number
    isPublic: boolean
}

async function fetchBallonAmount(id: BallonI['id']): Promise<number> {
    const RANDOM_TIMEOUT: number = Math.ceil(Math.random() * 10000);
    const RANDOM_AMOUNT: number = Math.ceil(Math.random() * id);

    return new Promise(resolve => setTimeout(() => resolve(RANDOM_AMOUNT), RANDOM_TIMEOUT));
}

const BALLONS: { [key: string]: BallonI } = {
    red: {
        id: 202,
        isPublic: true,
    },
    blue: {
        id: 356,
        isPublic: false,
    },
    yellow: {
        id: 451,
        isPublic: false,
    },
    black: {
        id: 35,
        isPublic: true,
    },
    green: {
        id: 191,
        isPublic: true,
    },
    white: {
        id: 911,
        isPublic: true,
    },
};

async function getTotalPublicBallons() {
    const publicBallons = Object.values(BALLONS).filter(b => b.isPublic);
    const amounts = await Promise.all(publicBallons.map(b => fetchBallonAmount(b.id)));
    const total = amounts.reduce((sum, n) => sum + n, 0);
    return total;
}

getTotalPublicBallons().then(total => {
    console.log(total);
});
