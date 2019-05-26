import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('Component FullHeader', () => {
    it('Should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.lengthOf(1);
    });

    context('Title', () => {
        it('Should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />);
            expect(wrapper.find('h1')).to.have.lengthOf(1);
        });

        it('Should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.lengthOf(0);
        });

        it('Should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('Subtitle', () => {
        it('Should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(
                <FullHeader title='TDD' subtitle='Course' />
            );
            expect(wrapper.find('h2')).to.have.lengthOf(1);
        });

        it('Should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />);
            expect(wrapper.find('h2')).to.have.lengthOf(0);
        });

        it('Should have h2 tag with the subtitle passed', () => {
            const wrapper = shallow(
                <FullHeader title='TDD' subtitle='Course' />
            );
            expect(wrapper.find('h2').props().children).to.be.equal('Course');
        });
    });

    context('bgColor', () => {
        it('Should have background-color equal #CCC when none is passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />);
            expect(wrapper).to.have.style('background-color').equal('#CCC');
        });

        it('Should have background-color equal #000 when bgColor is passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' bgColor='#000' />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('Should have color equal #FFF when none is passed', () => {
            const wrapper = shallow(<FullHeader title='TDD' />);
            expect(wrapper).to.have.style('color').equal('#FFF');
        });

        it('Should have color #FF0000 equal when textColor is passed', () => {
            const wrapper = shallow(
                <FullHeader title='TDD' textColor='#FF0000' />
            );
            expect(wrapper).to.have.style('color').equal('#FF0000');
        });
    });

    context('font', () => {
        it('Should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('Should have font equal open-sans when font is passed', () => {
            const wrapper = shallow(<FullHeader font='open-sans' />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('bgImage', () => {
        it('Should have background-image empty when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('Should have background-image equal bg.jpg when passed', () => {
            const wrapper = shallow(<FullHeader bgImg='bg.jpg' />);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('Should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video='my_video.mp4' />);
            expect(wrapper.find('video')).to.have.lengthOf(1);
        });

        it('Should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.lengthOf(0);
        });

        it('Should have video tag hen the video is passed', () => {
            const wrapper = shallow(<FullHeader video='my_video.mp4' />);
            expect(wrapper.find('video').props().src).to.be.equal('my_video.mp4');
        });
    });
});
