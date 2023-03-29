import * as THREE from "./assets/cours/applications/libs/three.js-r132/build/three.module.js";


document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();

    const geometry = THREE.BoxGeometry(1, 1, 1); /* Width - Height - depth */ /* largeur - hauteur - profondeur*/
    const material = THREE.MeshBasicMaterial({ color: "#OOOOFF" }); /* Color, texture, shininess, etc*/ /* couleur, texture,brillance, etc*/
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0, Math.PI / 4, 0);

    const camera = new THREE.PerspectiveCamera();
    camera.position.set(1, 1, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(500, 500); /* unit in px */ /* unité en pixel */
    renderer.render(scene, camera);

    document.body.appendChild(renderer.domElement);

});