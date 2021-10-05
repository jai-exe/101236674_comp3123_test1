const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(resolve({ message: "resolved promise!" }), 500);
    });

const rejectedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(reject({ error: "rejected promise!" }), 500);
    });

resolvedPromise().then((msg) => console.log(msg));

rejectedPromise().catch((msg) => console.error(msg));

