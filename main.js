import * as THREE from './assets/cours/applications/libs/three.js-r132/build/three.module';

document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.scene();

    const geometry = THREE.BoxGeometry(1, 1, 1); /* Width - Height - depth */ /* largeur - hauteur - profondeur*/
    const material = THREE.MeshBasicMaterial({ color: "#OOOOFF" });
    const cube = new THREE.Mesh(geometry, material);
});