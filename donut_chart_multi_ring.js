var dataset = [
    {
        innerCircle: [0.4161, 0.1628, 0.2783, 0.1428],
        outerCircle: [0.3249, 0.4008, 0.1635, 0.1563, 0.2954, 0.3034, 0.2163, 0.1395],
        mets: '9139',
        sdi: 'Low',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.3312, 0.1667, 0.3015, 0.2007],
        outerCircle: [20, 20, 1, 4, 15, 20, 12, 8],
        mets: '7288',
        sdi: 'Low-Middle',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2984, 0.1724, 0.3214, 0.2079],
        outerCircle: [20, 15, 8, 7, 9, 11, 17, 13],
        mets: '6485',
        sdi: 'Middle',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2620, 0.1671, 0.3551, 0.2160],
        outerCircle: [20, 5, 8, 2, 9, 16, 27, 13],
        mets: '5830',
        sdi: 'Middle-High',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2026, 0.1509, 0.4003, 0.2465],
        outerCircle: [45, 9, 2, 8, 4, 11, 32, 28],
        mets: '4622',
        sdi: 'High',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.3312, 0.1577, 0.3131, 0.1982],
        outerCircle: [20, 25, 8, 12, 9, 16, 7, 3],
        mets: '7011',
        sdi: 'Low',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2576, 0.1545, 0.3371, 0.2511],
        outerCircle: [20, 20, 1, 4, 15, 20, 12, 8],
        mets: '5618',
        sdi: 'Low-Middle',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2376, 0.1543, 0.3436, 0.2649],
        outerCircle: [20, 15, 8, 7, 9, 11, 17, 13],
        mets: '5115',
        sdi: 'Middle',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2044, 0.1523, 0.3688, 0.2749],
        outerCircle: [20, 5, 8, 2, 9, 16, 27, 13],
        mets: '4634',
        sdi: 'Middle-High',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.1468, 0.1382, 0.4102, 0.3053],
        outerCircle: [6, 9, 2, 8, 4, 11, 32, 28],
        mets: '3645',
        sdi: 'High',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2090, 0.1509, 0.3630, 0.2776],
        outerCircle: [20, 25, 8, 12, 9, 16, 7, 3],
        mets: '3877',
        sdi: 'Low',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1505, 0.1298, 0.3808, 0.3395],
        outerCircle: [20, 20, 1, 4, 15, 20, 12, 8],
        mets: '3177',
        sdi: 'Low-Middle',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1389, 0.1208, 0.3670, 0.3741],
        outerCircle: [20, 15, 8, 7, 9, 11, 17, 13],
        mets: '2835',
        sdi: 'Middle',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1126, 0.1154, 0.3738, 0.3991],
        outerCircle: [20, 5, 8, 2, 9, 16, 27, 13],
        mets: '2524',
        sdi: 'Middle-High',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.0726, 0.0990, 0.3928, 0.4366],
        outerCircle: [6, 9, 2, 8, 4, 11, 32, 28],
        mets: '2040',
        sdi: 'High',
        ageGroup: '70 plus'
    }
];

var byAgeGroup = d3.nest()
                   .key(function(dataset) { return dataset.ageGroup; })
                   .entries(dataset);

var bySDI      = d3.nest()
                   .key(function(dataset) { return dataset.sdi; })
                   .entries(dataset);

var chartColors  = {
    innerCircleColors   : ['#143642', '#0f8b8d', '#ec9a29', '#a8201a'],
    outerCircleColors   : ['#112d37', '#546c75', '#0d7274', '#50aaac',
                           '#c27f22', '#f1b563', '#8a1b16', '#bf5c58']

};

var middlePointsWide = [100, 300, 500];
var middlePointsLong = [100, 300, 500, 700, 900];

    //colors and shapes
var color       = d3.scaleOrdinal(d3.schemeCategory20),
    pie         = d3.pie()
                    .sort(null);

    //DOM manipulation
var svgContainer = d3.select("body")
                     .append("svg")
                     .attr("width", 600)
                     .attr("height", 1000);

var sdiLevel     = svgContainer.selectAll(".sdi")
                           .data(bySDI)
                           .enter()
                           .append("g")
                           .attr('class', 'sdi')
                           .attr('transform', function (d,i) {
                                return 'translate(100,'+middlePointsLong[i]+')';
                            });

var innerRing     = sdiLevel.append('g')
                            .attr('class', 'young')
                            .selectAll('.arc')
                            .data(function (d) { return pie(d3.values(d)[1][2].innerCircle); })
                            .enter()
                            .append('path')
                            .attr('class', 'arc')
                            .attr('fill', function(d,i,j) { return chartColors.innerCircleColors[i]; })
                            .attr('d', function(d,i,) {

                                return d3.arc()
                                         .cornerRadius(5)
                                         .innerRadius(20)
                                         .outerRadius(40)(d);
                            });

var middleRing     = sdiLevel.append('g')
                            .attr('class', 'middle')
                            .selectAll('.arc')
                            .data(function (d) { return pie(d3.values(d)[1][1].innerCircle); })
                            .enter()
                            .append('path')
                            .attr('class', 'arc')
                            .attr('fill', function(d,i,j) { return chartColors.innerCircleColors[i]; })
                            .attr('d', function(d,i,) {
                                return d3.arc()
                                         .cornerRadius(5)
                                         .innerRadius(40)
                                         .outerRadius(60)(d);
                            });

var outerRing     = sdiLevel.append('g')
                            .attr('class', 'old')
                            .selectAll('.arc')
                            .data(function (d) { return pie(d3.values(d)[1][0].innerCircle); })
                            .enter()
                            .append('path')
                            .attr('class', 'arc')
                            .attr('fill', function(d,i,j) { return chartColors.innerCircleColors[i]; })
                            .attr('d', function(d,i,) {
                                return d3.arc()
                                         .cornerRadius(5)
                                         .innerRadius(60)
                                         .outerRadius(80)(d);
                            });
