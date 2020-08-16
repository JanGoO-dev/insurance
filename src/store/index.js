import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    plans: [
      {
        id: "001",
        imageLink: "card1.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
      {
        id: "002",
        imageLink: "card2.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
      {
        id: "003",
        imageLink: "card3.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
      {
        id: "004",
        imageLink: "card4.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
      {
        id: "005",
        imageLink: "card5.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
      {
        id: "006",
        imageLink: "card6.jpg",
        title: "Card Title",
        text: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rerum aspernatur officia accusantium quidem, ullam reprehenderit quisquam ratione, repudiandae eos dolore quasi error veniam nisi optio ducimus! Harum earum praesentium mollitia provident dignissimos architecto iusto pariatur, quam distinctio nisi voluptates ipsa cumque rem quasi minima reiciendis amet, fugiat aliquid blanditiis!",
        ],
      },
    ],
    user: {
      id: 13123,
      name: "Asad Ali Bhutta",
    },
  },
  getters: {
    getAllPlans: (state) => {
      return state.plans;
    },
    getCurPlan: (state) => (id) => {
      return state.plans.find((plan) => {
        return plan.id === id;
      });
    },
    user: (state) => {
      return state.user;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
