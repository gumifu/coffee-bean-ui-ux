"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAPプラグインを登録
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoffeeBeanScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // モバイル判定
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // シーンのセットアップ
    const scene = new THREE.Scene();

    // FOVを画面サイズに応じて調整
    const fov = isMobile ? 35 : isTablet ? 32 : 30;

    const camera = new THREE.PerspectiveCamera(
      fov,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    // カメラのz位置を画面サイズに応じて調整
    const cameraZ = isMobile ? 10 : isTablet ? 9 : 8;
    camera.position.set(0, 0, cameraZ);

    // About Two Beansボタンの位置にlookAtを設定
    const targetY = -0.3; // ボタン位置に合わせたY座標
    camera.lookAt(0, targetY, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // モバイルではアンチエイリアスを無効化してパフォーマンス向上
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    // モバイルではピクセル比を制限
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // 透明背景
    renderer.shadowMap.enabled = true; // シャドウを有効化
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // ソフトシャドウ
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // ライティング
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // メインライト（影を生成） - やや前方から照らす
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight1.position.set(3, 10, 6);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.camera.left = -10;
    directionalLight1.shadow.camera.right = 10;
    directionalLight1.shadow.camera.top = 10;
    directionalLight1.shadow.camera.bottom = -10;
    // モバイルではシャドウマップ解像度を下げてパフォーマンス向上
    const shadowMapSize = isMobile ? 1024 : 2048;
    directionalLight1.shadow.mapSize.width = shadowMapSize;
    directionalLight1.shadow.mapSize.height = shadowMapSize;
    directionalLight1.shadow.bias = -0.0005;
    directionalLight1.shadow.radius = isMobile ? 2 : 3; // ソフトシャドウ
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 0.4);
    pointLight.position.set(0, 5, 3);
    scene.add(pointLight);

    // 影を受け取る平面を追加（コーヒー豆の真下）
    const planeGeometry = new THREE.PlaneGeometry(6, 6);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.35 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.5; // コーヒー豆に近づける
    plane.receiveShadow = true;
    scene.add(plane);

    // GLTFローダーで3Dモデルを読み込み
    const loader = new GLTFLoader();
    loader.load(
      "/5750b9d2-7b39-416f-b82d-08e2f860e749.glb",
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // モデルのサイズと位置を調整
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // モデルを中央に配置
        model.position.sub(center);
        // 初期位置（FVセクションのみ120px上げる）
        const initialY = -0.9 + 120 / 1000; // 120px = 0.12のy座標
        model.position.y = initialY; // FVセクション: 120px上げた位置

        // スケール調整（画面サイズに応じて）
        const maxSize = Math.max(size.x, size.y, size.z);
        const baseScale = (3 / maxSize) * 0.6; // 基本サイズを0.6倍に
        // モバイルでは少し小さくする
        const scale = isMobile ? baseScale * 0.9 : baseScale;
        model.scale.setScalar(scale);

        // 影を有効化
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);

        // モデルの初期角度を設定（割れ目が横になるように90度回転）
        model.rotation.x = 0.1; // わずかに前傾
        model.rotation.y = Math.PI / 2; // 90度回転して割れ目を横に
        model.rotation.z = 0;

        // --- アニメーションの統合管理 (gsap.timeline) ---

        // カメラの移動量を画面サイズに応じて調整
        const cameraMoveAmount = isMobile ? 1.5 : isTablet ? 1.75 : 2;

        // 1. カメラの動き (左右の構図変更)
        const camTL = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        camTL
          .to(camera.position, { x: 0, duration: 2 }) // ヒーロー (中央)
          .to(camera.position, { x: -cameraMoveAmount, duration: 3 }) // Origins (豆を右へ = カメラ左)
          .to(camera.position, { x: cameraMoveAmount, duration: 4 }) // Culture (豆を左へ = カメラ右)
          .to(camera.position, { x: 0, duration: 3 }); // Aboutセクションで中央へ

        // 2. 豆の回転 (見せたい角度の切り替え)
        const rotationTL = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        rotationTL
          .to(model.rotation, { x: 0.1, y: Math.PI / 2, z: 0, duration: 2 }) // FV: 割れ目が横
          .to(model.rotation, {
            x: Math.PI / 2 - 0.05,
            y: -0.1,
            z: -0.1,
            duration: 3,
          })
          .to(model.rotation, {
            x: Math.PI / 2 + 0.1,
            y: 0.2,
            z: 0.15,
            duration: 4,
          })
          .to(model.rotation, { x: 0.1, y: Math.PI / 2, z: 0, duration: 3 }); // 最後: 割れ目が横

        // 3. 全体的な浮遊感と「影への着地」
        const positionTL = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        // スマホでは80px上に移動、下部を120px下に下げる調整
        // 80px上 = +0.08, 120px下 = -0.12, 最終的に-0.9 + 0.08 - 0.12 = -0.94
        const finalY = isMobile ? -0.9 + 80 / 1000 - 120 / 1000 : -0.9; // スマホのみ位置調整

        positionTL
          .to(model.position, { y: initialY, duration: 2 }) // FVセクション: 120px上げた位置を維持
          .to(model.position, { y: 0.1, duration: 7 }) // 途中までは浮かせたまま
          .to(model.position, { y: finalY, duration: 3 }); // 最後は影の平面と同じ高さに戻して重ねる（スマホは調整済み）

        // 4. スケールのアニメーション (元の大きさに戻す)
        const scaleTL = gsap.timeline({
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        scaleTL
          .to(model.scale, {
            x: scale * 0.5,
            y: scale * 0.5,
            z: scale * 0.5,
            duration: 10,
          }) // 途中で少し小さく
          .to(model.scale, { x: scale, y: scale, z: scale, duration: 4 }); // 最後は元の大きさに戻す

        // DOMが完全に読み込まれた後にScrollTriggerをリフレッシュ
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300);
      },
      (progress) => {
        const percent = (progress.loaded / progress.total) * 100;
        console.log(`Loading: ${percent.toFixed(2)}%`);
      },
      (error) => {
        console.error("Error loading 3D model:", error);
      }
    );

    // アニメーションループ
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // リサイズ対応
    const handleResize = () => {
      if (!container) return;

      // リサイズ時に画面サイズを再判定
      const currentIsMobile = window.innerWidth < 768;
      const currentIsTablet =
        window.innerWidth >= 768 && window.innerWidth < 1024;

      // FOVを更新
      const newFov = currentIsMobile ? 35 : currentIsTablet ? 32 : 30;
      camera.fov = newFov;

      // カメラのz位置を更新
      const newCameraZ = currentIsMobile ? 10 : currentIsTablet ? 9 : 8;
      camera.position.z = newCameraZ;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      // lookAtも再設定
      const targetY = -0.3;
      camera.lookAt(0, targetY, 0);

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(
        currentIsMobile ? 1 : Math.min(window.devicePixelRatio, 2)
      );

      // ScrollTriggerをリフレッシュ
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();

      // ScrollTriggerのクリーンアップ
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 15 }}
    />
  );
}
