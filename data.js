var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano---warehouse1",
      "name": "pano - warehouse1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 180,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09419594146045185,
          "pitch": 0.018286754798921834,
          "rotation": 0,
          "target": "1-pano---office-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0919154970939502,
          "pitch": -0.11765368783462016,
          "title": "&lt;location 2&gt;",
          "text": "Click here to go to &lt;location 2&gt;"
        }
      ]
    },
    {
      "id": "1-pano---office-2",
      "name": "pano - office 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 175,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
