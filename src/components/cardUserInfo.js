import createGlobe from "https://cdn.skypack.dev/cobe";

export function cardUserInfo(container, userData) {
  //console.log(userData);
  container.innerHTML = `
    <div class="card d-flex justify-content-center align-items-center text-center text-white bg-primary mb-3" style="max-width: 30rem;">
  <div class="card-header">Bienvenido ${userData.firstname} ${userData.lastname} </div>
  <div class="card-body">
    <h4 class="card-title text-warning">Tus datos:</h4>
    <p class="card-text">Email : ${userData.email}</p>
  </div>
  <canvas
  id="cobe"
  style="width: 500px; height: 500px"
></canvas>
</div>

    `;
  let phi = 0;
  let canvas = document.getElementById("cobe");

  const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 0,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [5, 5, 5],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
      { location: [42.1234, -71.2345], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi
      phi += 0.01
    },
  })
}
