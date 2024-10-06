# A language Learning app designed for School Children
## Curretly a Toy project


### For Lottie
```html
<canvas id="lottie-canvas-01" width="300" height="300"></canvas>
<script type="module">
    import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

    new DotLottie({
        autoplay: true,
        loop: true,
        canvas: document.getElementById("lottie-canvas-01"),
        src: "animation/coin.json", // replace file name
    });
</script>
```

### For rive
```html
<canvas id="canvas" width="500" height="500"></canvas>

<script src="https://unpkg.com/@rive-app/canvas@2.20.0"></script>
<script>
  const r = new rive.Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv", // replac filename
    canvas: document.getElementById("canvas"),
    autoplay: true,
    // artboard: "Arboard", // Optional. If not supplied the default is selected
    stateMachines: "bumpy",
    onLoad: () => {
      // Ensure the drawing surface matches the canvas size and device pixel ratio
      r.resizeDrawingSurfaceToCanvas();
    },
  });
</script>
```
