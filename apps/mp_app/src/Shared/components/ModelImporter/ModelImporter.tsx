/**
 * CreatedBy Yusuf Sargin on 20/02/2022
 */
import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'

const ModelImporter = ({...props}: any) => {
    const group = useRef()
    const {nodes, materials} = useGLTF('/images/vista_display_full.glb')

    console.log("Nodes => ", nodes)
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[0, 0.39, 0]}>
                <mesh geometry={nodes.top_1.geometry} material={nodes.top_1.material}/>
                <mesh geometry={nodes.top_2.geometry} material={nodes.top_2.material}/>
            </group>
            <mesh geometry={nodes['left-right_side_1'].geometry} material={nodes['left-right_side_1'].material}/>
            <mesh geometry={nodes['left-right_side_2'].geometry} material={nodes['left-right_side_2'].material}/>
            <group position={[0, -0.43, 0]}>
                <mesh geometry={nodes.bottom_1.geometry} material={nodes.bottom_1.material}/>
                <mesh geometry={nodes.bottom_2.geometry} material={nodes.bottom_2.material}/>
            </group>
            <mesh geometry={nodes.foot.geometry} material={nodes.foot.material} position={[0, -0.28, 0]} scale={0.02}/>
            <mesh
                geometry={nodes.back.geometry}
                material={nodes.back.material}
                position={[0, 0, -0.13]}
                scale={[1.01, 1.01, 0]}
            />
            <group position={[-0.26, 0.38, 0.22]}>
                <mesh geometry={nodes.door_1_1.geometry} material={nodes.door_1_1.material}/>
                <mesh geometry={nodes.door_1_2.geometry} material={nodes.door_1_2.material}/>
            </group>
            <group position={[-0.26, -0.14, 0.22]}>
                <mesh geometry={nodes.door_2_1.geometry} material={nodes.door_2_1.material}/>
                <mesh geometry={nodes.door_2_2.geometry} material={nodes.door_2_2.material}/>
            </group>
            <group position={[0.26, -0.14, 0.22]}>
                <mesh geometry={nodes.door_3_1.geometry} material={nodes.door_3_1.material}/>
                <mesh geometry={nodes.door_3_2.geometry} material={nodes.door_3_2.material}/>
            </group>
            <mesh geometry={nodes.top_profil.geometry} material={nodes.top_profil.material} position={[0, 0.65, 0.22]}/>
            <mesh
                geometry={nodes.top_profil001.geometry}
                material={nodes.top_profil001.material}
                position={[0, -0.41, 0.22]}
            />
            <mesh
                geometry={nodes.top_profil002.geometry}
                material={nodes.top_profil002.material}
                position={[-0.52, 0.08, 0.22]}
                rotation={[0, 0, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.top_profil003.geometry}
                material={nodes.top_profil003.material}
                position={[0.52, 0.08, 0.22]}
                rotation={[0, 0, Math.PI / 2]}
            />
            <mesh geometry={nodes.shelf.geometry} material={nodes.shelf.material} position={[0.53, 0.38, -0.01]}/>
            <mesh geometry={nodes.shelf001.geometry} material={nodes.shelf001.material} position={[0.27, 0.38, -0.01]}/>
            <mesh
                geometry={nodes.shelf002.geometry}
                material={nodes.shelf002.material}
                position={[-0.29, 0.15, 0]}
                rotation={[0, 0, Math.PI / 2]}
            />
            <mesh geometry={nodes.shelf003.geometry} material={nodes.shelf003.material} position={[0.27, 0.12, -0.01]}/>
            <mesh geometry={nodes.vertical.geometry} material={nodes.vertical.material} position={[0, 0.12, -0.67]}/>
            <mesh
                geometry={nodes.vertical001.geometry}
                material={nodes.vertical001.material}
                position={[0.27, 0.53, -0.67]}
            />
            <mesh
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
                position={[-0.17, -0.68, -1.83]}
                scale={[2.33, 1, 1]}
            />
            <mesh
                geometry={nodes.handle002.geometry}
                material={nodes.handle002.material}
                position={[-0.08, 0.05, 0.23]}
                scale={0.02}
            />
            <mesh
                geometry={nodes.handle001.geometry}
                material={nodes.handle001.material}
                position={[0.07, 0.05, 0.23]}
                scale={0.02}
            />
            <mesh
                geometry={nodes.handle.geometry}
                material={nodes.handle.material}
                position={[-0.07, 0.22, 0.23]}
                scale={0.02}
            />
        </group>
    )
}

export default React.memo(ModelImporter, (prevProps, nextProps) => {
    return false
})