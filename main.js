// create an array with nodes
var nodes = new vis.DataSet([

]);

// create an array with edges
var edges = new vis.DataSet([

]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};


function addNode(nodeData,callback) {
  var name = document.getElementById("name").value;

  if (name != "")
  {
    nodeData.label = name;
    nodeData.color = document.getElementById('color').value;
    console.log(nodes);
    console.log(edges);
    callback(nodeData);
  }
  else
  {
    callback(null);
    alert("Please enter a name into the box bellow");
  }
}



var options = {

physics:{
    enabled: false,
    stabilization: false,
},
  interaction:{
    dragNodes:true,
    dragView: true,
    hover: true,
    hoverConnectedEdges: true,
    keyboard: {
      enabled: true,
      speed: {x: 10, y: 10, zoom: 0.02},
      bindToWindow: true
    },
    multiselect: true,
    navigationButtons: true,
    selectable: true,
    selectConnectedEdges: true,
    tooltipDelay: 300,
    zoomView: true
  },
  manipulation: {
    enabled: true,
    initiallyActive: true,
    addNode: function(nodeData,callback)
    {
      addNode(nodeData,callback)
    },
    editNode: function(nodeData,callback)
    {
      addNode(nodeData,callback)
    },
    addEdge: true,
    //editNode: true,
    editEdge: true,
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle:{
      // all node options are valid.
    },

  },

  "edges": {
      smooth: false,
    "arrows": {
      "to": {
        "enabled": true
      }
    }
  },

};


// initialize your network!
var network = new vis.Network(container, data, options);
