import { shallow } from "enzyme";
import { Education } from "./Education";

describe('Education', () => {
    const wrapper = shallow(<Education />);
    it('Should have h1 tag', () => {
        expect(wrapper.find('h1').text()).toBe('Образование')
    })
    it('Should have empty field education', () => {
        expect(wrapper.find('#institution').text()).toBe('')
    })
    it('Should have 3 radio button', () => {
        expect(wrapper.find('.radioInput')).toHaveLength(3)
    })
    it('Should have 3 checkbox', () => {
        expect(wrapper.find('.inputCheckBox')).toHaveLength(3)
    })
    it('Should have button', () => {
        expect(wrapper.find('.nextBut')).not.toBe(undefined)
        expect(wrapper.find('.nextBut').text()).toBe('Продолжить')
    })


})