import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import { Store } from "@/Store";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex)

describe("Counter.vue", () => {
  const wrapper = shallowMount(Counter, { Store, localVue });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  it("button click should increment the count", () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
