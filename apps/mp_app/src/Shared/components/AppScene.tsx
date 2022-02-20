/**
 * CreatedBy Yusuf Sargin on 20/02/2022
 */
import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

interface AppSceneProps {
    children: React.ReactNode
}

const AppScene = ({children}: AppSceneProps) => {
    return <Canvas style={{
        height: "100vh",
        width: "100%"
    }}>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
        <ambientLight intensity={0.5}/>
        <directionalLight color="white" position={[0, 0, 5]}/>
        {children}
    </Canvas>
}

export default AppScene