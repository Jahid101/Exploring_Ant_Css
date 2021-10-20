import React from 'react';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;
const treeData = [
    {
        title: '6Sense',
        key: '0-0',
        children: [
            {
                title: 'Aasim',
                key: '0-0-0',
                isLeaf: true,
            },
            {
                title: 'Bivor',
                key: '0-0-1',
                isLeaf: true,
            },
        ],
    },
    {
        title: 'Team',
        key: '0-1',
        children: [
            {
                title: 'Tanaz',
                key: '0-1-0',
                isLeaf: true,
            },
            {
                title: 'Sohel',
                key: '0-1-1',
                isLeaf: true,
            },
            {
                title: 'Symon',
                key: '1-0-0',
                isLeaf: true,
            },
            {
                title: 'Jahid',
                key: '1-0-1',
                isLeaf: true,
            },
        ],
    },
];



const Index = () => {

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };



    return (
        <div className="mh-50 mv-50">
            <h1 className="text-center underline">Directory Tree</h1>

            <DirectoryTree
                multiple
                // defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            />
        </div>
    );
};

export default Index;
