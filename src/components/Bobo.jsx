"use client";
import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useGraph } from "@react-three/fiber";
import { SkeletonUtils } from "three-stdlib";

export default function Bobo({ animationName = "seatedIdle", ...props }) {
  const group = useRef();
  const { scene } = useGLTF("/avatar/bobo.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: seatedIdleAnimation } = useFBX("/avatar/seatedidle.fbx");
  const { animations: fightAnimation } = useFBX("/avatar/fight_pose.fbx");
  const { animations: burpeeAnimation } = useFBX("/avatar/burpee.fbx");
  const { animations: workingOnDeviceAnimation } = useFBX(
    "/avatar/working_on_device.fbx"
  );
  const { animations: rumbaDancingAnimation } = useFBX(
    "/avatar/rumba_dancing.fbx"
  );

  seatedIdleAnimation[0].name = "seatedIdle";
  burpeeAnimation[0].name = "burpee";
  fightAnimation[0].name = "fight";
  workingOnDeviceAnimation[0].name = "workingOnDevice";
  rumbaDancingAnimation[0].name = "rumbaDancing";

  const { actions } = useAnimations(
    [
      seatedIdleAnimation[0],
      burpeeAnimation[0],
      fightAnimation[0],
      workingOnDeviceAnimation[0],
      rumbaDancingAnimation[0],
    ],
    group
  );

  useEffect(() => {
    console.log("Current animation in:", animationName);
    actions[animationName]?.reset().fadeIn(0.5).play();
    return () => actions[animationName]?.fadeOut(0.5);
  }, [animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <primitive object={nodes.Hips} />
    </group>
  );
}

useGLTF.preload("/avatar/bobo.glb");
