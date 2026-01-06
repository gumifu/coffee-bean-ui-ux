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

    // シーンのセットアップ
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    directionalLight1.shadow.bias = -0.0005;
    directionalLight1.shadow.radius = 3; // ソフトシャドウ
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 0.4);
    pointLight.position.set(0, 5, 3);
    scene.add(pointLight);

    // 影を受け取る平面を追加（コーヒー豆の真下）
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
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
        model.position.y = -0.5; // 少し下に配置して影に近づける

        // スケール調整（必要に応じて）
        const maxSize = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxSize;
        model.scale.setScalar(scale);

        // 影を有効化
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);

        // モデルの初期角度を設定（割れ目が見えるように）
        model.rotation.x = 0.1; // わずかに前傾
        model.rotation.y = 0; // 正面向き
        model.rotation.z = 0;

        // --- 角度のアニメーション ---

        // Originsセクション (30% - 50%)
        // 右側の画像に合わせる角度
        gsap.to(model.rotation, {
          x: Math.PI / 2 - 0.1,
          y: -0.1,
          z: -0.2, // 右側に傾ける
          scrollTrigger: {
            trigger: "body",
            start: "5% top",
            end: "40% top",
            scrub: 1,
          },
        });

        // Cultureセクション (60% - 80%)
        // 左側の画像に合わせる角度
        gsap.to(model.rotation, {
          x: Math.PI / 2 + 0.1,
          y: 0.2,
          z: 0.25, // 左側に傾ける
          scrollTrigger: {
            trigger: "body",
            start: "60% top",
            end: "80% top",
            scrub: 1,
          },
        });

        // --- 位置とカメラのアニメーション ---

        // 全体的なY軸の微調整
        gsap.to(model.position, {
          y: 0.1,
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        // カメラのX位置（左右移動）
        // 1. Originsセクション（画像は右側） -> 豆を右へ（カメラを左へ）
        gsap.to(camera.position, {
          x: -4.8,
          scrollTrigger: {
            trigger: "body",
            start: "30% top",
            end: "50% top",
            scrub: 1,
          },
        });

        // 2. Cultureセクション（画像は左側） -> 豆を左へ（カメラを右へ）
        gsap.to(camera.position, {
          x: 4.8,
          scrollTrigger: {
            trigger: "body",
            start: "60% top",
            end: "80% top",
            scrub: 1,
          },
        });

        // カメラを元の位置に戻す（フッター付近）
        gsap.to(camera.position, {
          x: 0,
          scrollTrigger: {
            trigger: "body",
            start: "85% top",
            end: "100% top",
            scrub: 1,
          },
        });

        // スケールのアニメーション
        const originalScale = model.scale.x;
        gsap.to(model.scale, {
          x: originalScale * 0.85, // 少し小さくして画像に収める
          y: originalScale * 0.85,
          z: originalScale * 0.85,
          scrollTrigger: {
            trigger: "body",
            start: "30% top",
            end: "80% top",
            scrub: 1,
          },
        });
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
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
