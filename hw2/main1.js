const robots = [
    {
        robot: "raf",
        speed: 50,
        force: 20
    },
    {
        robot: "nas",
        speed: 70,
        force: 30

    },
    {
        robot: "just",
        speed: 80,
        force: 40
    },
    {
        robot: "none",
        speed: 100,
        force: 50
    },
]
const filteredRobots = robots.filter(robot => robot.speed > 70)
console.log(filteredRobots);