const express = require("express");
const redis = require("redis");
const app = express();
const port = 3001;

const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: "redis"
    }
});

const fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

app.use("/gs_calc/:number", async (req, res) => {
    const number = req.params.number;
    await redisClient.connect();

    let value = await redisClient.get(number + "");
    if (value == null) {
        value = fib(number);
        redisClient.set(number + "", value + "");
    }
    redisClient.quit();

    res.status(200).send({ calculated: value });
});

app.listen(port, () => {
    console.log(`Backend listening on ${port}`);
});