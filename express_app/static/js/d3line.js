
const MARGIN = {
    LEFT: 100,
    RIGHT: 40,
    TOP: 60,
    BOTTOM: 130
}

const VIEWPORT_WIDTH = 1040;

const VIEWPORT_HEIGHT = 400;

const WIDTH = VIEWPORT_WIDTH - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = VIEWPORT_HEIGHT - MARGIN.TOP - MARGIN.BOTTOM

const svg = d3.select(".line-area").append("svg")
    .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
    .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

    svg.append("line")
    .attr("x1", 100)
    .attr("x2", 1000)
    .attr("y1", 50)
    .attr("y2", 50)
    .attr("stroke", "black")


