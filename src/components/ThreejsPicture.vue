<template>
  <canvas class="webgl"></canvas>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default {
  name: "ThreejsPicture",
  data() {
    return {
      scene2: undefined,
      camera2: undefined,
      renderer2: undefined,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    renderScene2() {
      this.renderer2.render(this.scene2, this.camera2);
      console.log("loaded");
    },
    init() {
      /**
       * Base
       */

      // Canvas
      const canvas = document.querySelector("canvas.webgl");

      // scene2
      const scene2 = new THREE.Scene();

      //MATERIAL
      const newMaterial = new THREE.MeshLambertMaterial({
        wireframe: true,
      });

      //MODELS
      const torus = new THREE.Mesh(
        new THREE.TorusBufferGeometry(1, 1, 5, 12),
        newMaterial
      );
      scene2.add(torus);

      /**
       * Sizes
       */
      const sizes2 = {
        // width: window.innerWidth * 0.8,
        // height: window.innerHeight,
        width: 400,
        height: 400,
      };

      window.addEventListener("resize", () => {
        // Update sizes2
        // sizes2.width = window.innerWidth * 0.8;
        // sizes2.height = window.innerHeight;

        // Update camera
        camera2.aspect = sizes2.width / sizes2.height;
        camera2.updateProjectionMatrix();

        // Update renderer
        renderer2.setSize(sizes2.width, sizes2.height);
        renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      // Base camera
      const camera2 = new THREE.PerspectiveCamera(
        70,
        sizes2.width / sizes2.height,
        0.1,
        100
      );
      camera2.position.set(2, 2, 3.5);
      scene2.add(camera2);

      // Controls
      const controls = new OrbitControls(camera2, canvas);
      controls.target.set(0, 0.75, 0);
      controls.enableDamping = true;

      /**
       * Renderer
       */
      const renderer2 = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer2.setSize(sizes2.width, sizes2.height);
      renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      /**
       * Animate
       */
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update controls
        controls.update();
        torus.rotation.x = 0.5 * elapsedTime;

        // Render
        renderer2.render(scene2, camera2);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();
    },
  },
};
</script>

<style lang="scss" scoped>
.webgl {
}
</style>
