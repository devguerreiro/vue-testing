import { mount } from "@vue/test-utils";
import Emitter from "@/components/Emitter.vue";

describe("Emitter", () => {
  it("should emits an event with two arguments", () => {
    const wrapper = mount(Emitter);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted("myEvent")[0]).toEqual(["name", "password"]);
  });

  it("should emits an event without mounting the component", () => {
    const events = {};
    const $emit = (event, ...args) => {
      events[event] = [...args];
    };

    Emitter.methods.emitEvent.call({ $emit });

    expect(events.myEvent).toEqual(["name", "password"]);
  });
});
