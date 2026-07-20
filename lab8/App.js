const app = require("express")();

const prime = n => {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0) return false;
    return n > 1;
};

app.get("/find_prime_100", (req, res) => {
    let p = [];
    for (let i = 2; i < 100; i++)
        if (prime(i)) p.push(i);
    res.json(p);
});

app.get("/find_cube_100", (req, res) => {
    let c = [];
    for (let i = 1; i ** 3 < 100; i++)
        c.push(i ** 3);
    res.json(c);
});

app.listen(3000, () => console.log("Server running"));