let cube, sphere, gui, controls
let step = 0;

// ---------------------
// Establish the scene and render properties
// ---------------------

const scene = new THREE.Scene();

// The object responsible for drawing out scenes.
const renderer = new THREE.WebGLRenderer({ 

// **-- THREE.CanvasRenderer instead of WebGL for older browsers also requires: 
// https://threejs.org/examples/js/renderers/CanvasRenderer.js
// https://threejs.org/examples/js/renderers/Projector.js

  antialias: true
});

// ---------------------
// Create the camera -- the browser's default view of the scene
// ---------------------

// Sets where the 'view' of the scene starts, plus things like field of view  on the camera etc
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight ,
  0.1,
  1000
);

// The camera's position in the 3d space
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
// Points the camera to the scene
camera.lookAt(scene.position);

const animate = () => {
  step += controller.bouncingSpeed;

  cube.rotation.x += controller.rotationSpeed;
  cube.rotation.y += controller.rotationSpeed;
  cube.rotation.z += controller.rotationSpeed;

  // Math.abs means the sine wave will always be positive (above the plane)
  cube.position.y = 2 + 10 * Math.abs( Math.sin( step ) );
  sphere.position.x = 20 + 10 * Math.cos( step );
  sphere.position.y = 2 + 10 * Math.abs( Math.sin( step ) );

  // After properties have been changed, it's important to render the *current* state of the scene.
  renderer.render( scene, camera );
  // RequestAnimationFrame works almost like a setInterval for animating things, except it is optimised for the browser and your hardware instead of a fixed time interval. It's faster and more efficient.
  requestAnimationFrame( animate );
};

const addLight = () => {
  // Adds light to the scene, allowing features such as shadows
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(-40, 60, 20);
  // Takes into account objects in the path of the light and shades them accordingly.
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  scene.add( pointLight );
};

// Two side effects of declaring a function with new:
  // Returns an empty object assigned to the keyword this
  // Implicit returns
const controller = new function(){
  // These are properties I want added to the controller
  this.bouncingSpeed = 0.02;
  this.rotationSpeed = 0.02;
};

// Sets all components
const init = () => {
// ---------------------
// Set values of the 3d space
// ---------------------

  // The background colour of the canvas, in this case grey.
  renderer.setClearColor(0xeceff1);
  // Make the canvas as large as the browser
  renderer.setSize( window.innerWidth, window.innerHeight );
  // Scales the canvas to the window size and preserve the ratio (don't 'stretch' the canvas)
  renderer.setPixelRatio( window.devicePixelRatio || 1 );
  // Adds our newly created canvas to the document (inserted in the output div)
  document.querySelector("#output").appendChild( renderer.domElement );
  
  // A built in visualiser to 3js to show your relationship in 3d space (x, y & z)
  const axes = new THREE.AxisHelper(20);
  scene.add(axes);

  // Creates a new instance of the graphic controller
  gui = new dat.GUI();
  // The properties we want to modify in the controller object and our bounds (lowest & highest)
  gui.add( controller, "rotationSpeed", 0, 5 );
  gui.add( controller, "bouncingSpeed", 0, 5 );

  // Calls addLight -- which generates the spotlight for the scene.
  addLight();

// ---------------------
// Add the plane (flat area) to the scene
// ---------------------

  // Creates an area of 'ground' in space
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  // Meshes are the actual texture of the ground/shape
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xcfd8dc,
    // Tells 3js to render texture on both sides of the pane (otherwise it's transparent if viewed from underneath)
    side: THREE.DoubleSide
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;

  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;
  scene.add( plane );

  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  // LabertMaterial takes light into account. MeshBasicMaterial (which we changed from) does not.
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff8f00
  });
  
  // ---------------------
  // Add cube to scene
  // ---------------------

  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -4;
  cube.position.y = 3;
  cube.castShadow = true;
  // Adds the newly created shape to the scene
  scene.add( cube );

  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039be5
  });

// ---------------------
// Add sphere to scene
// ---------------------

  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;
  sphere.castShadow = true;
  scene.add( sphere );

  // Takes the shadows all into account and renders them to the scene 
  
  renderer.shadowMap.enabled = true; // **-- Not useable with CanvasRenderer

  // The call to actually draw all objects in the scene from the camera's perspective
  renderer.render( scene, camera );

  // Allows mouse dragging to move + zooming (by pinching your trackpad)
  controls = new THREE.OrbitControls( camera, renderer.domElement );

  // Kick off animations once all components are set.
  animate();
}; // End init

window.onload = init;

// Scales the canvas to the size of the browser every time it's resized.
const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// The actual event listener for resizing the window.
window.addEventListener( "resize", onResize );