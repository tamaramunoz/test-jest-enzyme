import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';

// set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Counter />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

test('render non-empty component', () => {
    const wrapper = setup();
    // const counterComponent = wrapper.find("[data-test='component-counter']");
    const counterComponent = findByTestAttr(wrapper, "component-counter");
    expect(counterComponent.length).toBe(1);
});

test('renders incremet button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
});

test('render counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
});

test('clicking button increments counter display', () => {
    const wrapper = setup();

    // find the button 
    const button = findByTestAttr(wrapper, "increment-button");

    // click the button
    button.simulate('click');

    // find the display, and text that the number has been incremented
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("1");
});

test('render decrement button', () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    expect(decrementButton.length).toBe(1)
});


// test('clicking button decrements counter display when state is greater than 0', () => {
//     const wrapper = setup();

//     // find decrement button and click
//     const decrementButton = findByTestAttr(wrapper, "decrement-button");
//     decrementButton.simulate('click');
// });