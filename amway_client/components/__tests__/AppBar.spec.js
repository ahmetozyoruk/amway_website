import { shallowMount } from "@vue/test-utils";
import AppBar from "../AppBar";
const factory = () => {
    return shallowMount(AppBar, {
    });
  };
  
  describe("AppBar", () => {
    test("Bir Vue kopmonenti", () => {
      const wrapper = factory();
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test("Snapshot Ozelligi ", () => {
      const wrapper = factory();
      expect(wrapper.html()).toMatchSnapshot();
    });
  
  });