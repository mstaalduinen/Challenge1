//tabel 1 lekker eten//
      var chart1 = new CanvasJS.Chart("chart1", {
        backgroundColor: "black",
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: ""
        },
        data: [{
          type: "pie",
          startAngle: 25,
          toolTipContent: "<b>{label}</b>: {y}%",
          indexLabelFontSize: 16,
          title: {fontFamily:"Montserrat"},
          indexLabel: "{label} - {y}%", indexLabelFontColor: "white",
          indexLabelFontWeight: "bold",
          indexLabelFontFamily: "Montserrat",
          indexLabelFontSize: 12,
          dataPoints: [
            { y: 51, label: "Chocolade" },
            { y: 30, label: "Pizza's" },
            { y: 26, label: "Pannenkoeken" },
            { y: 70, label: "Mars" }
          ]
        }]
      });
      chart1.render();

      //tabel 2 werkzaamheden

      var chart = new CanvasJS.Chart("chart2", {
        categorySpacing: 0,
        width: 500,
        backgroundColor: "black",

        animationEnabled: true,
        title:{
          text: "",
          fontColor: "white",
          fontFamily: "Montserrat",
          fontWeight: "bold",
          fontSize: "13",
        },
        axisX: {
          interval: 1,
          intervalType: "years",
          valueFormatString: "YYYY",
          title: "Jaren",
          titleFontColor: "white",
          titleFontStyle: "italic",
          titleFontWeight: "bold"
        },
        axisY: {
          suffix: "",
          title: "Werkzaamheden",
          titleFontColor: "white",
          titleFontStyle: "italic",
          labelFontColor: "white",
          titleFontWeight: "bold"
        },
        toolTip: {
          shared: true
        },
        legend: {
          reversed: true,
          verticalAlign: "center",
          horizontalAlign: "right",
          fontColor: "white",
          fontFamily: "Montserrat",
          fontSize: 11
        },
        data: [{
          type: "stackedColumn100",
          name: "Benzine",
          showInLegend: true,
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0\"%\"",
          dataPoints: [
            { x: new Date(2010,0), y: 40 },
            { x: new Date(2011,0), y: 50 },
            { x: new Date(2012,0), y: 60 },
            { x: new Date(2013,0), y: 61 },
            { x: new Date(2014,0), y: 63 },
            { x: new Date(2015,0), y: 65 },
            { x: new Date(2016,0), y: 67 }
          ]
        }, 
        {
          type: "stackedColumn100",
          name: "Aardolie",
          showInLegend: true,
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0\"%\"",
          dataPoints: [
            { x: new Date(2010,0), y: 28 },
            { x: new Date(2011,0), y: 18 },
            { x: new Date(2012,0), y: 12 },
            { x: new Date(2013,0), y: 10 },
            { x: new Date(2014,0), y: 10 },
            { x: new Date(2015,0), y: 7 },
            { x: new Date(2016,0), y: 5 }
          ]
        }, 
        {
          type: "stackedColumn100",
          name: "Olie",
          showInLegend: true,
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0\"%\"",
          dataPoints: [
            { x: new Date(2010,0), y: 15 },
            { x: new Date(2011,0), y: 12 },
            { x: new Date(2012,0), y: 10 },
            { x: new Date(2013,0), y: 9 },
            { x: new Date(2014,0), y: 7 },
            { x: new Date(2015,0), y: 5 },
            { x: new Date(2016,0), y: 1 }
          ]
        },
        {
          type: "stackedColumn100",
          name: "Vloeistof",
          showInLegend: true,
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0\"%\"",
          dataPoints: [
            { x: new Date(2010,0), y: 17 },
            { x: new Date(2011,0), y: 20 },
            { x: new Date(2012,0), y: 18 },
            { x: new Date(2013,0), y: 20 },
            { x: new Date(2014,0), y: 20 },
            { x: new Date(2015,0), y: 23 },
            { x: new Date(2016,0), y: 27 }
          ]
        }]
      });
      chart.render();

//chart3

var chart = new CanvasJS.Chart("chart3", {
  backgroundColor: "black",
  animationEnabled: true,
  title:{
    text: ""
  },
  axisX :{
    labelFont: "Montserrat",
    indexLabelFontSize: 12,
    labelFontColor: "white",
  },
  axisY :{
    includeZero: false,
    prefix: "$",
    labelFontColor: "white"
  },
  toolTip: {
    shared: true
  },
  legend: {
    fontSize: 13,
    fontColor: "white"
  },
  data: [{
    type: "splineArea",
    showInLegend: true,
    name: "Salarissen",
    yValueFormatString: "$#,##0",
    xValueFormatString: "MMM YYYY",
    dataPoints: [
      { x: new Date(2016, 2), y: 30000 },
      { x: new Date(2016, 3), y: 35000 },
      { x: new Date(2016, 4), y: 30000 },
      { x: new Date(2016, 5), y: 30400 },
      { x: new Date(2016, 6), y: 20900 },
      { x: new Date(2016, 7), y: 31000 },
      { x: new Date(2016, 8), y: 30200 },
      { x: new Date(2016, 9), y: 30000 },
      { x: new Date(2016, 10), y: 33000 },
      { x: new Date(2016, 11), y: 38000 },
      { x: new Date(2017, 0),  y: 38900 },
      { x: new Date(2017, 1),  y: 39000 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    name: "Brandstof",
    yValueFormatString: "$#,##0",
    dataPoints: [
      { x: new Date(2016, 2), y: 20100 },
      { x: new Date(2016, 3), y: 16000 },
      { x: new Date(2016, 4), y: 14000 },
      { x: new Date(2016, 5), y: 18000 },
      { x: new Date(2016, 6), y: 18000 },
      { x: new Date(2016, 7), y: 21000 },
      { x: new Date(2016, 8), y: 22000 },
      { x: new Date(2016, 9), y: 25000 },
      { x: new Date(2016, 10), y: 23000 },
      { x: new Date(2016, 11), y: 25000 },
      { x: new Date(2017, 0), y: 26000 },
      { x: new Date(2017, 1), y: 25000 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    name: "Eten",
    yValueFormatString: "$#,##0",     
    dataPoints: [
      { x: new Date(2016, 2), y: 10100 },
      { x: new Date(2016, 3), y: 6000 },
      { x: new Date(2016, 4), y: 3400 },
      { x: new Date(2016, 5), y: 4000 },
      { x: new Date(2016, 6), y: 9000 },
      { x: new Date(2016, 7), y: 3900 },
      { x: new Date(2016, 8), y: 4200 },
      { x: new Date(2016, 9), y: 5000 },
      { x: new Date(2016, 10), y: 14300 },
      { x: new Date(2016, 11), y: 12300 },
      { x: new Date(2017, 0), y: 8300 },
      { x: new Date(2017, 1), y: 6300 }
    ]
  },
  {
    type: "splineArea", 
    showInLegend: true,
    yValueFormatString: "$#,##0",      
    name: "Ruimteschip onderhoud",
    dataPoints: [
      { x: new Date(2016, 2), y: 1700 },
      { x: new Date(2016, 3), y: 2600 },
      { x: new Date(2016, 4), y: 1000 },
      { x: new Date(2016, 5), y: 1400 },
      { x: new Date(2016, 6), y: 900 },
      { x: new Date(2016, 7), y: 1000 },
      { x: new Date(2016, 8), y: 1200 },
      { x: new Date(2016, 9), y: 5000 },
      { x: new Date(2016, 10), y: 1300 },
      { x: new Date(2016, 11), y: 2300 },
      { x: new Date(2017, 0), y: 2800 },
      { x: new Date(2017, 1), y: 1300 }
    ]
  }]
});
chart.render();


 