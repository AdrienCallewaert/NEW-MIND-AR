import { loadGLTF } from "./assets/applications/libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    const start = async() => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: './assets/applications/assets/targets/EHMOCK.mind',
        });
        const { renderer, scene, camera } = mindarThree;

        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);


        // const gltf = await loadGLTF('./assets/applications/assets/models/musicband-raccoon/scene.gltf');
        const gltf = await loadGLTF('./assets/applications/assets/models/stilizedplane/scene.gltf');
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(0, -0.4, 0);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(gltf.scene);

        const mixer = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();

        const clock = new THREE.Clock();

        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            const delta = clock.getDelta();
            gltf.scene.rotation.set(0, gltf.scene.rotation.y + delta, 0);
            mixer.update(delta);
            renderer.render(scene, camera);
        });
    }
    start();
});