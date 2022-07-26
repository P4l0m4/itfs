<template>
  <canvas class="webgl"></canvas>
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default {
  name: "ThreejsPicture",
  data() {
    return {
      scene: undefined,
      camera: undefined,
      renderer: undefined,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    renderScene() {
      this.renderer.render(this.scene, this.camera);
      console.log("loaded");
    },
    init() {
      /**
       * Base
       */

      // Canvas
      const canvas = document.querySelector("canvas.webgl");

      // Scene
      const scene = new THREE.Scene();

      //MATERIAL
      const newMaterial = new THREE.MeshLambertMaterial({
        color: "orange",
        //   wireframe: true,
      });

      //MODELS
      const gltfLoader = new GLTFLoader();

      gltfLoader.load("threejs-models/logo-itfs.gltf", (gltf) => {
        while (gltf.scene.children.length) {
          gltf.scene.children[0].material = newMaterial;
          scene.add(gltf.scene.children[0]);
        }
      });

      gltfLoader.load("threejs-models/logo-itfs-circle.gltf", (gltf) => {
        gltf.scene.children[0].material = newMaterial;
        gltf.scene.children[0].position.x = 0;
        gltf.scene.children[0].rotation.x = 45;
        gltf.scene.children[0].rotation.y = 45;
        scene.add(gltf.scene);
      });

      /**
       * Lights
       */
      const ambientLight = new THREE.AmbientLight("orange", 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(1024, 1024);
      directionalLight.shadow.camera.far = 15;
      directionalLight.shadow.camera.left = -7;
      directionalLight.shadow.camera.top = 7;
      directionalLight.shadow.camera.right = 7;
      directionalLight.shadow.camera.bottom = -7;
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      /**
       * Sizes
       */
      const sizes = {
        // width: window.innerWidth * 0.8,
        // height: window.innerHeight,
        width: 400,
        height: 400,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        // sizes.width = window.innerWidth * 0.8;
        // sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      // Base camera
      const camera = new THREE.PerspectiveCamera(
        70,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.set(4, 4, 4);
      scene.add(camera);

      // Controls
      const controls = new OrbitControls(camera, canvas);
      controls.target.set(0, 0.75, 0);
      controls.enableDamping = true;

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      /**
       * Animate
       */
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update controls
        controls.update();

        // Render
        renderer.render(scene, camera);
        const circle = scene.getObjectByName("Scene");

        if (circle) {
          circle.rotation.y = 0.2 * elapsedTime;
        }

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
  // border: blue solid 1px;
}
</style>
