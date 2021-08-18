import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render non-empty component', () => {
    const wrapper = shallow(<Counter />);
    const counterComponent = wrapper.find("[data-test='component-counter']");
    expect(counterComponent.length).toBe(1);
});

test('renders incremet button', () => {

});

test('render counter display', () => {

});

test('counter display starts at 0', () => {

});

test('clicking button increments counter display', () => {

});
