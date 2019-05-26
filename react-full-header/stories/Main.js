import React from 'react';
import FullHeader from '../src/Main';
import { storiesOf } from '@storybook/react';

storiesOf('React Full Header', module)
    .add('With title', () => (
        <FullHeader
            title='TDD'
        />
    ))
    .add('With title and subtitle', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
        />
    ))
    .add('With title, subtitle and bgColor', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
            bgColor='#3299BB'
        />
    ))
    .add('With title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
            bgColor='#3299BB'
            textColor='#FF9900'
        />
    ))
    .add('With title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
            bgColor='#96060C'
            textColor='#FF9900'
            font='cursive'
        />
    ))
    .add('With title, subtitle and bgImg', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
            bgImg='https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg'
        />
    ))
    .add('With title, subtitle, bgColor, textColor and video', () => (
        <FullHeader
            title='TDD'
            subtitle='JavaScript course with TDD in practice'
            bgColor='#EBE9EB'
            textColor='#3299BB'
            video='http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4'
        />
    ));
