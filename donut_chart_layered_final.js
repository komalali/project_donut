var dataset = [
    {
        innerCircle: [0.4161, 0.1628, 0.2783, 0.1428],
        outerCircle: [0.186351863, 0.229748137, 0.082464384, 0.080335616, 0.1385324, 0.1397676, 0.089289379, 0.053510621],
        mets: '9139',
        title: 'Low',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.3312, 0.1667, 0.3015, 0.2007],
        outerCircle: [0.131362246, 0.199837754, 0.082939662, 0.083760338, 0.156177478, 0.145322522, 0.127313715, 0.073386285],
        mets: '7288',
        title: 'Low-Middle',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2984, 0.1724, 0.3214, 0.2079],
        outerCircle: [0.121021437, 0.177378563, 0.085401578, 0.086998422, 0.175284983, 0.146115017, 0.122948571, 0.084951429],
        mets: '6485',
        title: 'Middle',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2620, 0.1671, 0.3551, 0.2160],
        outerCircle: [0.117652981, 0.144347019, 0.077668634, 0.089431366, 0.166482353, 0.188617647, 0.135530287, 0.080469713],
        mets: '5830',
        title: 'Middle-High',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.2026, 0.1509, 0.4003, 0.2465],
        outerCircle: [0.129629661, 0.072970339, 0.083678802, 0.067221198, 0.196300465, 0.203999535, 0.10648338, 0.14001662],
        mets: '4622',
        title: 'High',
        ageGroup: '25-44'
    },
    {
        innerCircle: [0.3312, 0.1577, 0.3131, 0.1982],
        outerCircle: [0.148329096, 0.182870904, 0.07988104, 0.07781896, 0.155855172, 0.157244828, 0.123929656, 0.074270344],
        mets: '7011',
        title: 'Low',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2576, 0.1545, 0.3371, 0.2511],
        outerCircle: [0.102170636, 0.155429364, 0.076869692, 0.077630308, 0.174618335, 0.162481665, 0.159284872, 0.091815128],
        mets: '5618',
        title: 'Low-Middle',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2376, 0.1543, 0.3436, 0.2649],
        outerCircle: [0.096362914, 0.141237086, 0.076435403, 0.077864597, 0.187392409, 0.156207591, 0.156657415, 0.108242585],
        mets: '5115',
        title: 'Middle',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2044, 0.1523, 0.3688, 0.2749],
        outerCircle: [0.091787287, 0.112612713, 0.070789545, 0.081510455, 0.172905356, 0.195894644, 0.172487389, 0.102412611],
        mets: '4634',
        title: 'Middle-High',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.1468, 0.1382, 0.4102, 0.3053],
        outerCircle: [0.093927119, 0.052872881, 0.076636252, 0.061563748, 0.20115526, 0.20904474, 0.131883878, 0.173416122],
        mets: '3645',
        title: 'High',
        ageGroup: '45-69'
    },
    {
        innerCircle: [0.2090, 0.1509, 0.3630, 0.2776],
        outerCircle: [0.093601392, 0.115398608, 0.076436582, 0.074463418, 0.180694435, 0.182305565, 0.173576552, 0.104023448],
        mets: '3877',
        title: 'Low',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1505, 0.1298, 0.3808, 0.3395],
        outerCircle: [0.059692083, 0.090807917, 0.064580492, 0.065219508, 0.197255004, 0.183544996, 0.215361267, 0.124138733],
        mets: '3177',
        title: 'Low-Middle',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1389, 0.1208, 0.3670, 0.3741],
        outerCircle: [0.05633337, 0.08256663, 0.059840549, 0.060959451, 0.20015429, 0.16684571, 0.221236463, 0.152863537],
        mets: '2835',
        title: 'Middle',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.1126, 0.1154, 0.3738, 0.3991],
        outerCircle: [0.050563838, 0.062036162, 0.053638302, 0.061761698, 0.175249517, 0.198550483, 0.250417304, 0.148682696],
        mets: '2524',
        title: 'Middle-High',
        ageGroup: '70 plus'
    },
    {
        innerCircle: [0.0726, 0.0990, 0.3928, 0.4366],
        outerCircle: [0.046451695, 0.026148305, 0.054898618, 0.044101382, 0.192622589, 0.200177411, 0.188603017, 0.247996983],
        mets: '2040',
        title: 'High',
        ageGroup: '70 plus'
    }
];

var byAgeGroup = d3.nest()
                   .key(function(dataset) { return dataset.ageGroup; })
                   .entries(dataset);

var chartColors  = {
    innerCircleColors   : ['#143642', '#0f8b8d', '#ec9a29', '#a8201a'],
    outerCircleColors   : ['#112d37', '#546c75', '#0d7274', '#50aaac',
                           '#c27f22', '#f1b563', '#8a1b16', '#bf5c58']

};

var middlePointsLong = [100, 300, 500];
var middlePointsWide = [100, 300, 500, 700, 900];

    //colors and shapes
var color       = d3.scaleOrdinal(d3.schemeCategory20),
    pie         = d3.pie()
                    .sort(null);

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
                        .attr("y", 25)
                        .text(function(d) { return d.title; })
                        .attr('text-anchor', 'middle')
                        .attr('font-size', '10px')
                        .attr('font-weight', 'bold');

var metsText   = sdiLevel.append("text")
                         .attr("x", 0)
                         .attr("y", 10)
                         .text(function(d) { return d.mets; })
                         .attr('text-anchor', 'middle')
                         .attr('font-size', '24px')
                         .attr('font-weight', 'bold');


var ageGroupText = sdiLevel.append("text")
                           .attr("x", 0)
                           .attr("y", -15)
                           .text(function(d) { return d.ageGroup; })
                           .attr('text-anchor', 'middle')
                           .attr('font-size', '13px')
                           .attr('font-weight', 'bold');

var innerRing = sdiLevel.append('g')
                        .attr('class', 'innerRing');

var innerArcs = innerRing.selectAll('.innerArc')
                         .data( function (d) { return pie(d.innerCircle); } )
                         .enter()
                         .append('path')
                         .attr('class', 'innerArc')
                         .attr('fill', function(d,i) {
                             return chartColors.innerCircleColors[i]
                         })
                         .attr('d', function(d,i) {
                             return d3.arc()
                                      .cornerRadius(5)
                                      .innerRadius(45)
                                      .outerRadius(80)(d);
                         });

var outerRing = sdiLevel.append('g')
                        .attr('class', 'outerRing');

var outerArcs = outerRing.selectAll('.outerArc')
                         .data( function (d) { return pie(d.outerCircle); } )
                         .enter()
                         .append('path')
                         .attr('class', 'outerArc')
                         .attr('fill', function(d,i) {
                             return chartColors.outerCircleColors[i]
                         })
                         .attr('d', function(d,i) {
                            return d3.arc()
                                          .cornerRadius(5)
                                          .innerRadius(80)
                                          .outerRadius(95)(d);
                         });
