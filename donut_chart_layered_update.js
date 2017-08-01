var dataset = [
    {
        topCircle: [0.4540, 0.1519, 0.2797, 0.1144],
        bottomCircle: [0.3781, 0.1737, 0.2770, 0.1712],
        mets: '9139',
        title: 'Low',
        ageGroup: '25-44'
    },
    {
        topCircle: [0.3656, 0.1661,0.3163, 0.1519],
        bottomCircle: [0.2969, 0.1673, 0.2868, 0.2494],
        mets: '7288',
        title: 'Low-Middle',
        ageGroup: '25-44'
    },
    {
        topCircle: [0.3333, 0.1654, 0.3347, 0.1666],
        bottomCircle: [0.2056, 0.1459, 0.3265, 0.3225],
        mets: '6485',
        title: 'Middle',
        ageGroup: '25-44'
    },
    {
        topCircle: [0.2622, 0.1597, 0.3811, 0.1971],
        bottomCircle: [0.2037, 0.1470, 0.3447, 0.3052],
        mets: '5830',
        title: 'Middle-High',
        ageGroup: '25-44'
    },
    {
        topCircle: [0.1692, 0.1414, 0.4228, 0.2670],
        bottomCircle: [0.2360, 0.1604, 0.3779, 0.2259],
        mets: '4622',
        title: 'High',
        ageGroup: '25-44'
    },
    {
        topCircle: [0.3695, 0.1625, 0.3157, 0.1523],
        bottomCircle: [0.2928, 0.1529, 0.3104, 0.2442],
        mets: '7011',
        title: 'Low',
        ageGroup: '45-69'
    },
    {
        topCircle: [0.290577971, 0.164785063, 0.359425619, 0.185326666],
        bottomCircle: [0.224687937, 0.144187117, 0.314791776, 0.316910755],
        mets: '5618',
        title: 'Low-Middle',
        ageGroup: '45-69'
    },
    {
        topCircle: [0.269429522, 0.162762037, 0.360750240, 0.207266645],
        bottomCircle: [0.205673128, 0.145915951, 0.326496780, 0.322522202],
        mets: '5115',
        title: 'Middle',
        ageGroup: '45-69'
    },
    {
        topCircle: [0.205111172, 0.157665497, 0.392883771, 0.244657884],
        bottomCircle: [0.203695674, 0.146979304, 0.344697535, 0.305161066],
        mets: '4634',
        title: 'Middle-High',
        ageGroup: '45-69'
    },
    {
        topCircle: [0.126737362, 0.135598538, 0.423023426, 0.315216849],
        bottomCircle: [0.166871868, 0.140786779, 0.397363481, 0.295481836],
        mets: '3645',
        title: 'High',
        ageGroup: '45-69'
    },
    {
        topCircle: [0.2484, 0.1532, 0.3807, 0.2179],
        bottomCircle: [0.1695, 0.1487, 0.3452, 0.3372],
        mets: '3877',
        title: 'Low',
        ageGroup: '70 plus'
    },
    {
        topCircle: [0.180752779, 0.143625115, 0.416826808, 0.259176391],
        bottomCircle: [0.120330474, 0.115948064, 0.344752772, 0.419919575],
        mets: '3177',
        title: 'Low-Middle',
        ageGroup: '70 plus'
    },
    {
        topCircle: [0.170842633, 0.134533543, 0.395132576, 0.300030118],
        bottomCircle: [0.107036978, 0.107068656, 0.338883104, 0.448091845],
        mets: '2835',
        title: 'Middle',
        ageGroup: '70 plus'
    },
    {
        topCircle: [0.116980934, 0.124244420, 0.396700267, 0.362823033],
        bottomCircle: [0.108275943, 0.106482883, 0.350822211, 0.435444387],
        mets: '2524',
        title: 'Middle-High',
        ageGroup: '70 plus'
    },
    {
        topCircle: [0.064487298, 0.095849981, 0.388624179, 0.452135140],
        bottomCircle: [0.080803998, 0.102134278, 0.396942116, 0.421097876],
        mets: '2040',
        title: 'High',
        ageGroup: '70 plus'
    }
];

var byAgeGroup = d3.nest()
                   .key(function(dataset) { return dataset.ageGroup; })
                   .entries(dataset);

var chartColors  = {
    topCircleColors   : ['#143642', '#0f8b8d', '#ec9a29', '#a8201a'],
    //bottomCircleColors   : ['#112d37', '#0d7274', '#c27f22', '#8a1b16']
    bottomCircleColors  :['#546c75', '#50aaac', '#f1b563', '#bf5c58']

};

var middlePointsLong = [90, 270, 450];
var middlePointsWide = [100, 300, 500, 700, 900];

    //colors and shapes
var color           = d3.scaleOrdinal(d3.schemeCategory20),
    pie_top         = d3.pie()
                        .sort(null)
                        .startAngle(-90 * (Math.PI / 180))
                        .endAngle(90 * (Math.PI / 180)),
    pie_bottom         = d3.pie()
                        .sort(null)
                        .startAngle(270 * (Math.PI / 180))
                        .endAngle(90 * (Math.PI / 180));;

    //DOM manipulation
var svgContainer = d3.select("body")
                     .append("svg")
                     .attr("width", 600)
                     .attr("height", 1000);

var ageGroup     = svgContainer.selectAll('.ageGroup')
                               .data(byAgeGroup)
                               .enter()
                               .append('g')
                               .attr('class', 'ageGroup')
                               .attr('transform', function (d,i) {
                                   return 'translate('+middlePointsLong[i]+',0)';
                           });

var sdiLevel     = ageGroup.selectAll(".sdi")
                           .data(function (d) { return d3.values(d)[1]; })
                           .enter()
                           .append("g")
                           .attr('class', 'sdi')
                           .attr('transform', function (d,i) {
                                   return 'translate(0,'+middlePointsWide[i]+')';
                           });

var sdiText   = sdiLevel.append("text")
                        .attr("x", 0)
                        .attr("y", 100)
                        .text(function(d) { return d.title; })
                        .attr('text-anchor', 'middle')
                        .attr('font-size', '10px')
                        .attr('font-weight', 'bold');

var metsText   = sdiLevel.append("text")
                         .attr("x", 0)
                         .attr("y", 6)
                         .text(function(d) { return d.mets; })
                         .attr('text-anchor', 'middle')
                         .attr('font-size', '24px')
                         .attr('font-weight', 'bold');


var ageGroupText = sdiLevel.append("text")
                           .attr("x", 0)
                           .attr("y", 90)
                           .text(function(d) { return d.ageGroup; })
                           .attr('text-anchor', 'middle')
                           .attr('font-size', '13px')
                           .attr('font-weight', 'bold');

var topRing = sdiLevel.append('g')
                        .attr('class', 'topRing')
                        .attr('transform', 'translate(0,-5)');

var topArcs = topRing.selectAll('.topArc')
                         .data( function (d) { return pie_top(d.topCircle); } )
                         .enter()
                         .append('path')
                         .attr('class', 'topArc')
                         .attr('fill', function(d,i) {
                             return chartColors.topCircleColors[i]
                         })
                         .attr('d', function(d,i) {
                             return d3.arc()
                                      .cornerRadius(5)
                                      .innerRadius(37)
                                      .outerRadius(80)(d);
                         });

var bottomRing = sdiLevel.append('g')
                        .attr('class', 'bottomRing');

var bottomArcs = bottomRing.selectAll('.bottomArc')
                         .data( function (d) { return pie_bottom(d.bottomCircle); } )
                         .enter()
                         .append('path')
                         .attr('class', 'bottomArc')
                         .attr('fill', function(d,i) {
                             return chartColors.bottomCircleColors[i]
                         })
                         .attr('d', function(d,i) {
                            return d3.arc()
                                     .cornerRadius(5)
                                     .innerRadius(37)
                                     .outerRadius(80)(d);
                         });
